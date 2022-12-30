import { Button, Form } from "react-bootstrap";

export function ModalAdminLogIn() {
    return (
        <div>
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
                    <Button variant="dark">Log in as Admin</Button>
                </div>
            </Form>
        </div>
    )
}

export default ModalAdminLogIn;