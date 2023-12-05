import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import logo from "../Logo.jpg";

const NavBar = () => {
  const token = useSelector((state) => state.content);
  const userName = token && token.accessToken ? token.accessToken[1] : null;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="/">
        <img alt="Logo" src={logo} width="80" height="60" className="d-inline-block align-top" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="fw-bolder">
            Home
          </Nav.Link>
          <Nav.Link href="/esperienze" className="fw-bolder">
            Esperienze
          </Nav.Link>
          <Nav.Link href="/province" className="fw-bolder">
            Province e Capoluoghi
          </Nav.Link>
          {token ? (
            <Nav.Link href="/preferiti" className="fw-bolder">
              Preferiti
            </Nav.Link>
          ) : null}
        </Nav>
        <Nav>
          {token ? (
            <Nav.Link href="/myProfile">{`Benvenuto ${userName}`}</Nav.Link>
          ) : (
            <Nav.Link href="/login">Login/Registrati</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
