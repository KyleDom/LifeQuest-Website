import { Container, Nav, Button, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

export function Navbar() {
  const { auth, setAuth, admin, setAdmin } = useAuth();
  const navigate = useNavigate();

  function handleLogOut() {
    setAuth(undefined);
    setAdmin(false);
    localStorage.removeItem("accessToken");
    Swal.fire({
      icon: "success",
      title: "Successfully Logged Out!",
    });
    setTimeout(() => navigate("/"), 1000);
  }

  return (
    <NavbarBs className="navbar bg-danger mb-3">
      <Container>
        <Nav className="d-flex gap-7">
          <h3 className="life-quest text-dark">
            Life<span className="text-danger">Quest</span>
          </h3>
          <Nav.Link to="/" as={NavLink}>
            {admin ? "Admin" : "Home"}
          </Nav.Link>
          {!auth && (
            <Nav.Link to="/login" as={NavLink}>
              Log In
            </Nav.Link>
          )}
          <Nav.Link to="/team" as={NavLink}>
            Team Members
          </Nav.Link>
          {auth && (
            <Button variant="secondary" onClick={handleLogOut}>
              Log Out
            </Button>
          )}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
