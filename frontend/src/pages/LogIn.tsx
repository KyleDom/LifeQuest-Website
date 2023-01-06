
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import Axios from "axios";

import { Link, Route } from "react-router-dom";
import Team from "./Team";


  export function LogIn() {
 
    const [username,setuserName] = useState('')
    const [password,setPassword] = useState('')
    const submitData = ()=> {
      Axios.post("http://localhost:3002/api/login", {username: username, password: password}
      ).then(()=>{
        // <Route path="/team" element={<Team />} />
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
                onChange={(e)=>{
                  
                  setuserName(e.target.value)
                }}
                placeholder="Your username"
              />
              
                <></>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                placeholder="Your password"
              />
                <></>
            </Form.Group>
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <Button type="submit" variant="dark" onClick={submitData}>
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

