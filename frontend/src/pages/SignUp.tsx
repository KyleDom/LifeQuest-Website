import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import * as Yup from "yup";
import axios from "../api/axios";

export function Signup() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      address: "",
      age: "",
      bloodType: "",
      contact_number: "",
      password: "",
      gender: "",
      weight: "",
      height: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .min(6, "Must be 6 characters or more")
        .trim("Input cannot include leading and trailing spaces")
        .required("Required")
        .strict(true),
      username: Yup.string()
        .max(25, "Must be 25 characters or less")
        .min(6, "Must be 6 characters or more")
        .lowercase("Input cannot include leading and trailing spaces")
        .trim("Input cannot include leading and trailing spaces")
        .required("Required")
        .strict(true),
      address: Yup.string()
        .max(50, "Must be 50 characters or less")
        .trim("Input cannot include leading and trailing spaces")
        .required("Required"),
      age: Yup.number()
        .min(18, "You must be 18 and above")
        .required("Required")
        .strict(true),
      bloodType: Yup.string()
        .required("Required")
        .strict(true),
      contact_number: Yup.string()
        .required("Required")
        .strict(true),
      password: Yup.string()
        .required("Required")
        .strict(true),
      gender: Yup.string()
        .required("Required")
        .strict(true),
      weight: Yup.number()
        .required("Required")
        .strict(true),
      height: Yup.number()
        .required("Required")
        .strict(true),
    }),
    onSubmit: async function (values, { resetForm }) {
      const genderValue = values.gender === "0" ? 0 : 1;
      let res = await axios.post("/user/register", {
        ...values,
        gender: genderValue,
      });
      if (res.data.response) {
        Swal.fire({
          icon: "success",
          title: "Successfully Registered",
        });
        resetForm({});
      } else {
        Swal.fire({
          icon: "error",
          title: "Cannot be registered",
          text: "Looks like there is a duplicate username/fullname found in the database. Try again!",
        })
      }
    },
  });
  return (
    <div className="mt-5 mb-5 container-fluid col-8">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your username"
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.username}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFullname">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            name="fullName"
            type="text"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your fullname"
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.fullName}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your age"
          />
          {formik.touched.age && formik.errors.age ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.age}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formWeight">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            name="weight"
            type="number"
            value={formik.values.weight}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your weight in kilograms"
          />
          {formik.touched.weight && formik.errors.weight ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.weight}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formHeight">
          <Form.Label>Height</Form.Label>
          <Form.Control
            name="height"
            type="number"
            value={formik.values.height}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your height in cm"
          />
          {formik.touched.height && formik.errors.height ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.height}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your address"
          />
          {formik.touched.address && formik.errors.address ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.address}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBloodTypes">
          <Form.Label>Blood Types</Form.Label>
          <Form.Select
            name="bloodType"
            value={formik.values.bloodType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option> Select Blood Type</option>
            <option value="A-">A-</option>
            <option value="A+">A+</option>
            <option value="AB-">AB-</option>
            <option value="AB+">AB+</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="O-">O-</option>
            <option value="O+">O+</option>
          </Form.Select>
          {formik.touched.bloodType && formik.errors.bloodType ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.bloodType}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option> Select Gender</option>
            <option value="0">Male</option>
            <option value="1">Female</option>
          </Form.Select>
          {formik.touched.gender && formik.errors.gender ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.gender}
            </p>
          ) : (
            <></>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            name="contact_number"
            type="text"
            value={formik.values.contact_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Please enter your contact number"
          />
          {formik.touched.contact_number && formik.errors.contact_number ? (
            <p className="text-danger" style={{ fontSize: "0.8em" }}>
              {formik.errors.contact_number}
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
          <Button variant="dark">
            Sign up
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Signup;