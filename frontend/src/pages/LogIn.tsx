import { useAuth } from "../hooks/useAuth";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

export function LogIn() {
  const sampleAdminCredentials = {
    username: "adminuser",
    password: "AdminPassword123!",
  };
  const sampleUserCredentials = {
    username: "username",
    password: "UserPassword123!",
  };

  const { setAuth } = useAuth();

  const formik = useFormik({
    initialValues: {
      input: "",
      password: "",
    },
    validationSchema: Yup.object({
      input: Yup.string()
        .max(25, "Must be 25 characters or less")
        .min(6, "Must be 6 characters or more")
        .trim("Input cannot include leading and trailing spaces")
        .required("Required")
        .strict(true),
      password: Yup.string().required("Required").strict(true),
    }),
    onSubmit: async function (values, { resetForm }) {
      if (
        (values.input === sampleAdminCredentials.username &&
          values.password === sampleAdminCredentials.password) ||
        (values.input === sampleUserCredentials.username &&
          values.password === sampleUserCredentials.password)
      ) {
        setAuth(true);

        Swal.fire({
          icon: "success",
          title: "Successfully Logged In!",
        });
        resetForm({});
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Looks like there is something wrong with your Username or Password!",
        });
        console.log("Wrong Credentials");
      }
    },
  });

  return (
    <>
      <div className="logIn d-flex gap-5 align-items-center justify-content-center">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username / Email Address</Form.Label>
            <Form.Control
              name="input"
              type="text"
              value={formik.values.input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Your username"
            />
            {formik.touched.input && formik.errors.input ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.input}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Your password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.password}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <Button type="submit" variant="dark">
              Log in
            </Button>
            <div>
              No Account? <Link to="/signup">Signup here</Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LogIn;
