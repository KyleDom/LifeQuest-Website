import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import {useState} from 'react';
import Axios  from "axios";


export function Signup() {
    const [fullName,setfullName] = useState('')
    const [address,setaddress] = useState('')
    const [age,setage] = useState('')
    const [height,setheight] = useState('')
    const [weight,setweight] = useState('')
    const [gender,setgender] = useState('')
    const [blood,setbloodtype] = useState('')
    const [mobileNumber,setMobileNumber] = useState('')
    const [username,setuserName] = useState('')
    const [password,setPassword] = useState('')
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
        bloodtypes: "",
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
              onChange={(e)=>{
                
                setfullName(e.target.value)
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
                setage(e.target.value)
              }}
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
          <Form.Group className="mb-3" controlId="formheight">
            <Form.Label>Height</Form.Label>
            <Form.Control
              name="height"
              type="number"
              onChange={(e)=>{
                setheight(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please enter your height"
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
                setweight(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Please enter your weight"
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
                setgender(e.target.value)
              }}>
              <option> Select Gender</option>
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
                setaddress(e.target.value)
              }}
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
            <Form.Select aria-label="Default select example" onChange={(e)=>{
                setbloodtype(e.target.value)
              }}>
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
              onChange={(e)=>{
                setMobileNumber(e.target.value)
              }}
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
          <Form.Group className="mb-3" controlId="formusername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              onChange={(e)=>{
                setuserName(e.target.value)
              }}
              onBlur={formik.handleBlur}
              placeholder="Your username"
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
            <Button variant="dark" onClick={submitData}>Sign up</Button>
          </div>
        </Form>
      </div>
    );
  }

  export default Signup;