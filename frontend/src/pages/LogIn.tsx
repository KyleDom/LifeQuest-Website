import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import UserLogIn from "./UserLogIn";

export function LogIn() {
  const [logInUserShow, setLogInUserShow] = useState(false);
  const [logInAdminShow, setLogInAdminShow] = useState(false);
  return (
    <>
      <div className="logIn d-flex gap-5 align-items-center justify-content-center">
        <Button variant="danger" onClick={() => setLogInUserShow(true)}>
          Log in as User
        </Button>
        <Button variant="dark" onClick={() => setLogInAdminShow(true)}>
          Log in as Admin
        </Button>
        <Modal
          size="lg"
          show={logInUserShow}
          onHide={() => setLogInUserShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Log in as User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <UserLogIn/>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={logInAdminShow}
          onHide={() => setLogInAdminShow(false)}
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Log in as Admin
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmailAddress">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="emailAddress" placeholder="Please enter your email address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Please enter your username" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Please enter your password" />
              </Form.Group>
              <div className="d-flex gap-3 align-items-center justify-content-center">
                <Button variant="danger">Cancel</Button>
                <Button variant="dark">Log in as Admin</Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default LogIn;
