import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormContainer from "./formContainer";
import { useContext } from "react";
import { AppContext } from "./_app";

interface ILoginObj {
  username: string;
  password: string;
}
const initialValues = {
  username: "",
  password: "",
};

const LoginSchema = Yup.object({
  username: Yup.string().required("This field is required"),
  password: Yup.string().required("This field is required"),
});

const LoginScreen = () => {
  const router = useRouter();

  const { setAuth } = useContext(AppContext);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        submitHandler(values);
        localStorage.setItem("info", JSON.stringify(values));
        console.log("Information =", values);
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

    router.push("/read");
  };

  return (
    <FormContainer>
      <h1 className="my-3">Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && touched.username ? (
            <p className="form-error">{errors.username}</p>
          ) : null}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter your Password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </FormGroup>
        <Button type="submit" className="my-3" color="primary">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default LoginScreen;
