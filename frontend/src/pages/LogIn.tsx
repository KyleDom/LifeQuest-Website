import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const submitData = () => {
    Axios.post("http://localhost:3002/api/login", { username: username, password: password }
    ).then(() => {
      console.log("logged in")
      alert("Successful Login")
    })
  }

  return (
    <>
      <div className="logIn d-flex gap-5 align-items-center justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              name="username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value)
              }}
              placeholder="Please input your username"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              placeholder="Please input your password"
            />
          </Form.Group>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <Button type="submit" variant="dark" onClick={submitData}>
              Log in
            </Button>
            <div>
              No Account? <Link to="/SignUp">Sign Up here</Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}

export default LogIn;

