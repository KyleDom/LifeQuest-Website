import { Container, Row, Col } from "react-bootstrap";

export function Footer(){
    return (
        <footer className="bg-dark pb-2 fixed-bottom">
            <Container>
                <Row>
                    <Col className="pt-2 text-light" md={11}> 
                        <img src="images/logo.png" width="40" height="40"/>
                        Life<span className="text-danger">Quest</span>
                    </Col>
                    <Col className="pt-2">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lifequest@gmail.com" target="_blank">
                            <img src="images/email.png" width="40" height="20"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
      );
}

export default Footer;
