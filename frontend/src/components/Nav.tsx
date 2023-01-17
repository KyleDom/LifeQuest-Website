import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {

  return (
    <NavbarBs className="navbar gap-10 bg-danger mb-3">
      <Container>
        <Nav className="d-flex">
          <h3 className="life-quest text-dark">
            Life<span className="text-danger">Test</span>
          </h3>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
            <Nav.Link to="/login" as={NavLink}>
              Log In
            </Nav.Link>
          <Nav.Link to="/team" as={NavLink}>
            About Us
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;