import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function UserLogIn() {
    const [applyAsDonorShow, setApplyAsDonorShow] = useState(false);
    const [askForDonor, setAskForDonorShow] = useState(false);
    return (
        <>
            <div className="home d-flex gap-3 align-items-center justify-content-center">
                <Button variant="danger" onClick={() => setApplyAsDonorShow(true)}>Apply as Donor</Button>
                <Button variant="dark" onClick={() => setAskForDonorShow(true)}>
                    Ask for Donor
                </Button>
                <Modal
                    size="lg"
                    show={applyAsDonorShow}
                    onHide={() => setApplyAsDonorShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Apply as Donor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Fullname</Form.Label>
                                <Form.Control type="fullname" placeholder="Please enter your fullname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="address" placeholder="Please enter your address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="age" placeholder="Please enter your age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicBloodTypes">
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
                            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="mobileNumber" placeholder="Please enter your mobile number" />
                            </Form.Group>
                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                <Button variant="danger">Cancel</Button>
                                <Button variant="dark">Apply as Donor</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={askForDonor}
                    onHide={() => setAskForDonorShow(false)}
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Ask for Donor
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicFullname">
                                <Form.Label>Fullname</Form.Label>
                                <Form.Control type="fullname" placeholder="Please enter your fullname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="address" placeholder="Please enter your address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="age" placeholder="Please enter your age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicBloodTypes">
                                <Form.Label>Blood Type</Form.Label>
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
                            <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="mobileNumber" placeholder="Please enter your mobile number" />
                            </Form.Group>
                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                <Button variant="danger">Cancel</Button>
                                <Button variant="dark">Ask for Donor</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default UserLogIn;