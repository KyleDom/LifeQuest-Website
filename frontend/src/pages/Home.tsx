import { Card, Col, Row } from "react-bootstrap";

export function Home() {
  return (
    <>
      <div className="headline">
        <h2>Blood Donation 🩸</h2>
        <p className="ps-5">Donate blood and Save Lives.</p>
      </div>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>A 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>A+ 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>AB 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>AO 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>B 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>O 🩸 </Card.Title>
              <Card.Text>
                Number of donors:
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;
