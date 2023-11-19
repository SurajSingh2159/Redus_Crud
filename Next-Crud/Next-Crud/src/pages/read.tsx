import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import PrivateRoute from "@/PrivateRoute";
import { GetStaticProps } from "next";

interface IUserObj {
  id: number;
  name: string;
  email: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react"
  );
  const data: IUserObj[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Read = ({ data }: { data: IUserObj[] }) => {
  const [list, setList] = useState<Array<IUserObj>>(data);

  // const listAllData = () => {
  //   try {
  //     setProgress(progress + 10);
  //     axios
  //       .get("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react")
  //       .then((response) => {
  //         setProgress(progress + 50);
  //         setData(response.data);
  //         console.log(response.data);
  //         setProgress(progress + 100);
  //       });
  //   } catch (err) {
  //     new Error("Error while Reading");
  //   }
  // };

  // useEffect(() => {
  //   listAllData();
  // }, []);

  const handleDelete = (id: number) => {
    confirmAlert({
      title: "Confirm to Delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // axios
            //   .delete(
            //     `https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`
            //   )
            //   .then(() => {
            //     // listAllData();
            //     // getStaticProps()
            //   });
            const updatedItem = list.filter((value, item) => {
              return value.id !== id;
            });
            setList(updatedItem);
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const setLocalStorage = (id: number, name: string, email: string) => {
    localStorage.setItem("id", `${id}`);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3 mx-3">
        <h1>User Details</h1>
        <Link href="/create">
          <button className="btn btn-primary">Create data</button>
        </Link>
      </div>
      <table className="table mx-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {list.map((value, key) => {
          return (
            <tbody key={key}>
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{value.name}</td>
                <td>{value.email}</td>

                <td>
                  <Link href="/update">
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => {
                        setLocalStorage(value.id, value.name, value.email);
                      }}
                    >
                      Edit
                    </button>
                  </Link>
                </td>

                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Read;
