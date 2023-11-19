import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "axios"

interface ICreateObj {
  name: string;
  email: string;
}
const initialValues = {
  name: "",
  email: "",
};

const Create = () => {
  
    const navigate = useNavigate()

    const CreateSchema = Yup.object({
        name: Yup.string().required("This field is required"),
        email: Yup.string().email().required("This field is required"),
    })

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: CreateSchema,
      onSubmit: (values) => {
        submitHandler(values);
        console.log(values)
    },
    });

  const submitHandler = async (values: ICreateObj) => {
  axios.post("https://6426f3e2d24d7e0de47c5d1e.mockapi.io/crud-react",values) 
  .then(()=>{
    navigate("/read") 
  })
};

  return (
    <FormContainer>
      <h1>Create</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="my-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </Form.Group>
        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit" className="my-3">
          Create
        </Button>
      </Form>
    </FormContainer>
   
  );
};

export default Create;
