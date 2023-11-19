import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import { useFormik } from "formik";
import { useContext } from "react";
import { AppContext } from "../App";
import * as Yup from "yup";

interface ILoginObj {
  username: string;
  password: string;
}
const initialValues = {
  username: "",
  password: "",
};

const LoginScreen = () => {

  const LoginSchema = Yup.object({
    username: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
})

  const { setAuth } = useContext(AppContext);

  const navigate = useNavigate();

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        submitHandler(values);
      },
    });

  const submitHandler = async (values: ILoginObj) => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    setAuth(true);

    navigate("/read");
  };

  return (
    <FormContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
        </Form.Group>

        <Form.Group controlId="password" className="my-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
