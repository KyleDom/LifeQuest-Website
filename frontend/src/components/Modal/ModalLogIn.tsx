import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ModalAdminLogIn } from './ModalAdminLogIn';
import ModalUser from "./ModalUser";

export function ModalLogIn() {
  const [userShow, setUserShow] = useState(false);
  const [logInAdminShow, setLogInAdminShow] = useState(false);
  return (
    <div className="modalLogIn d-flex gap-3 align-items-center justify-content-center">
      <Button variant="danger" onClick={() => setUserShow(true)}>
        User
      </Button>
      <Button variant="dark" onClick={() => setLogInAdminShow(true)}>
        Admin
      </Button>
      <Modal
        size="lg"
        show={userShow}
        onHide={() => setUserShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign up or Log in
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ModalUser />
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={logInAdminShow}
        onHide={() => setLogInAdminShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Log in as Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalAdminLogIn />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalLogIn;