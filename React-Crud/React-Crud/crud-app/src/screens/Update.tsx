import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Update = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setId(localStorage.getItem("id") ?? "");
    setName(localStorage.getItem("name") ?? "");
    setEmail(localStorage.getItem("email") ?? "");
  }, []);
  const handleUpdate = (e: any) => {
    // setShowMessage(true);

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
          navigate("/read");
        }, 3000);
      });
  };

  return (
    <>
    <FormContainer>
      {/* {showMessage ? (
        // <div className="alert alert-primary" role="alert">
        //   Data Updated Successfully
        // </div>
      ) : (
        ""
      )} */}

      <h1>Update</h1>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="name" className="my-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group controlId="username" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Update
        </Button>
        <Link to="/read">
          <button className="btn btn-primary mx-4">Back</button>
        </Link>
      </Form>
    </FormContainer>
    <ToastContainer />
    </>
  );
};

export default Update;
