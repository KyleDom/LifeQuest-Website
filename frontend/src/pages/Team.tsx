import { Row, Col, Card } from "react-bootstrap"

export function Team() {
  return (
    <>
      <h1>OUR TEAM</h1>
      <div className="members">
        <Row>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/jiv.png" alt="" />
              <Card.Body>
                <Card.Title>Jiverle Dela Cruz</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/jay.png" alt="" />
              <Card.Body>
                <Card.Title>Kyle Lomigo</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/kert.png" alt="" />
              <Card.Body>
                <Card.Title>Kert Jem Solas</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/jay.png" alt="" />
              <Card.Body>
                <Card.Title>Jay Bandiola</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/cloyd.png" alt="" className="roundedCircle" />
              <Card.Body>
                <Card.Title>Edmar Cloyd Jagunap</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/basil.png" alt="" />
              <Card.Body>
                <Card.Title>Basil Amso</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="sm">
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src="/images/ferj.png" alt="" />
              <Card.Body>
                <Card.Title>Ferj Dave Torred</Card.Title>
                <Card.Text>
                  Sofware Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div>
          <h2 className="aboutus"> ABOUT US</h2>
          <p className="paragraph">
            The purpose of the online blood donation management system is to create an online communication between the organization and the blood donors. Anyone or any organization that wants to donate blood for a good cause or needs blood can register through this website. If necessary, the admin authority may add, delete and modify. The Online Blood Donation Management System project's goal is to create an online database of blood donation information. The distributed client-server computing technology has been taken into consideration throughout the entire project's development.
          </p>
        </div>
      </div>
    </>
  );
}

export default Team