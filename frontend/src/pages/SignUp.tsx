import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";

export function Signup() {
    const formik = useFormik({
      initialValues: {
        fullName: "",
        address: "",
        age: "",
        bloodtypes: "",
        mobileNumber: "",
        password: "",
      },
      validationSchema: Yup.object({
        fullName: Yup.string()
          .max(25, "Must be 25 characters or less")
          .min(6, "Must be 6 characters or more")
          .trim("Input cannot include leading and trailing spaces")
          .required("Required")
          .strict(true),
        address: Yup.string()
          .trim("Input cannot include leading and trailing spaces")
          .required("Required"),
        age: Yup.number()
          .min(18, "You must be 18 and above")
          .required("Required")
          .strict(true),
        bloodtypes: Yup.string().required("Required").strict(true),
        mobileNumber: Yup.string().required("Required").strict(true),
        password: Yup.string().required("Required").strict(true),
      }),
      onSubmit: async function (values, { resetForm }) {
        console.log(values);
        resetForm({});
      },
    });
    return (
      <div className="mt-5 mb-5 container-fluid col-8">
        <Form>
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
            <Form.Select aria-label="Default select example">
              <option> Select Blood Type</option>
              <option value="A">A</option>
              <option value="A+">A+</option>
              <option value="AB">AB</option>
              <option value="AO">AO</option>
              <option value="B">B</option>
              <option value="O">O</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMobileNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              name="mobileNumber"
              type="text"
              value={formik.values.mobileNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Please enter your mobile number"
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.mobileNumber}
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
            <Button variant="dark">Sign up</Button>
          </div>
        </Form>
      </div>
    );
  }
  
  export default Signup;