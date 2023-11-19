import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

interface IUserObj {
  id: number;
  name: string;
  email: string;
}

const Read = () => {
  const [data, setData] = useState<Array<IUserObj>>([]);

  const listAllData = () => {
    try {
      axios
        .get("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react")
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    } catch (err) {
      new Error("Error while Reading");
    }
  };

  useEffect(() => {
    listAllData();
  }, []);

  const handleDelete = (id: number) => {
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: (() => {
            // alert('Click Yes')
            const updatedItem = data.filter((value, item) => {
              return value.id !== id;
            });
            
            // alert("Are you sure you want to delete this item ?");
            setData(updatedItem);
          })
        },
        {
          label: 'No',
          onClick: (() => {
            // alert('Click No')
          })
        }
      ]
    });
    // const updatedItem = data.filter((value, item) => {
    //   return value.id !== id;
    // });
    
    // // alert("Are you sure you want to delete this item ?");
    // setData(updatedItem);
  };

  const setLocalStorage = (id: number, name: string, email: string) => {
    localStorage.setItem("id", `${id}`);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <h1>Read</h1>
        <Link to="/create">
          <button className="btn btn-sm btn-primary">Create data</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((value, key) => {
          return (
            <tbody key={key}>
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{value.name}</td>
                <td>{value.email}</td>

                <td>
                  <Link to="/update">
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
