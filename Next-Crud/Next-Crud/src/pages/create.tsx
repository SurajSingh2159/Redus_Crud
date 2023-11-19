import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import FormContainer from "./formContainer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
// import PrivateRoute from "@/PrivateRoute";

interface ICreateObj {
  name: string;
  email: string;
}
const initialValues = {
  name: "",
  email: "",
};

const CreateSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email().required("This field is required"),
});

const Create = () => {
  const router = useRouter();

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CreateSchema,
      onSubmit: (values) => {
        submitHandler(values);
        console.log(values);
      },
    });

  const submitHandler = async (values: ICreateObj) => {
    axios
      .post("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react", values)
      .then(() => {
        router.push("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-end my-3 mx-3">
        <Link href="/read">
          <button className="btn btn-primary">User data</button>
        </Link>
      </div>
      <FormContainer>
        <h1>Create User</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </FormGroup>
          <Button type="submit" className="my-3" color="primary">
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Create;
