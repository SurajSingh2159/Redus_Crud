import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import FormContainer from "./formContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const router = useRouter();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id") ?? "");
    setName(localStorage.getItem("name") ?? "");
    setEmail(localStorage.getItem("email") ?? "");
  }, []);
  const handleUpdate = (e: any) => {
    e.preventDefault();
    axios
      .put(`https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react/${id}`, {
        name: name,
        email: email,
      }).then(()=>{
        toast.success('Data Updated Successfully', {
          position: "bottom-right",
          autoClose: 2000
      })
      })
      .then(() => {
        setTimeout(() => {
          router.push("/read");
        }, 3000);
      });
  };

  return (
    <>
    <FormContainer>
      <h1 className="my-3">Update User</h1>
      <Form onSubmit={handleUpdate}>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        </FormGroup>
        <FormGroup>
        <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormGroup>

        <Button type="submit" className="my-3" color="primary">
          Update
        </Button>
        <Link href="/read">
          <button className="btn btn-primary mx-4">Back</button>
        </Link>
      </Form>
    </FormContainer>
    <ToastContainer />
    </>
  );
};

export default Update;
