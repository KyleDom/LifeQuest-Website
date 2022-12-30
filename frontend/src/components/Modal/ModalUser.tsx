import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function ModalUser() {
    const [signUpShow, setSignUpShow] = useState(false);
    const [logInShow, setLogInShow] = useState(false);
    return (
        <div className="d-flex gap-3 align-items-center justify-content-center">
            <Button variant="danger" onClick={() => setSignUpShow(true)}>Sign up</Button>
            <Button variant="dark" onClick={() => setLogInShow(true)}>
                Log in
            </Button>
            <Modal
                size="lg"
                show={signUpShow}
                onHide={() => setSignUpShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                            <Button variant="dark">Sign up</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={logInShow}
                onHide={() => setLogInShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Log in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
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
                            <Button variant="dark">Log in</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalUser;