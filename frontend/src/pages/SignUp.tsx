import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import {useState} from 'react';
import Axios  from "axios";

export function SignUp() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [blood, setBloodType] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitData = ()=> {
      Axios.post("http://localhost:3002/api/insert", {username: username, password: password, fullName: fullName, address: address, gender:gender, blood: blood, age:age, weight:weight, height:height,mobileNumber:mobileNumber}
      ).then(()=>{
        alert("Successful Insert")
        alert(blood)
      })
    }

    const formik = useFormik({
      initialValues: {
        fullName: "",
        address: "",
        age: "",
        height: "",
        weight:"",
        gender: "",
        bloodTypes: "",
        mobileNumber: "",
        username:"",
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
        bloodTypes: Yup.string().required("Required").strict(true),
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
          <Form.Group className="mb-3" controlId="formFullName">
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              name="fullName"
              type="text"
              onChange={(e)=>{
                
                setFullName(e.target.value)
              }}
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
              onChange={(e)=>{
                setAge(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your age"
            />
            {formik.touched.age && formik.errors.age ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.age}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formheight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              name="height"
              type="number"
              onChange={(e)=>{
                setHeight(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your height in cm"
            />
            {formik.touched.height && formik.errors.height ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.height}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formweight">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              name="weight"
              type="number"
              onChange={(e)=>{
                setWeight(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your weight in kg"
            />
            {formik.touched.weight && formik.errors.weight ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.weight}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formgender">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e)=>{
                setGender(e.target.value)
              }}>
              <option> Please select your gender </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              name="address"
              type="text"
              onChange={(e)=>{
                setAddress(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your address"
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
            <Form.Label> Blood Type </Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e)=>{
                setBloodType(e.target.value)
              }}>
              <option> Please select your blood type </option>
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
              onChange={(e)=>{
                setMobileNumber(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your mobile number"
            />
            {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.mobileNumber}
              </p>
            ) : (
              <></>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formusername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              onChange={(e)=>{
                setUsername(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your username"
            />
            {formik.touched.username && formik.errors.username ? (
              <p className="text-danger" style={{ fontSize: "0.8em" }}>
                {formik.errors.username}
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
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please input your password"
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
            <Button variant="dark" onClick={submitData}>Sign up</Button>
          </div>
        </Form>
      </div>
    );
  }

  export default SignUp;