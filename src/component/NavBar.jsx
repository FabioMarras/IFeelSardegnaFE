import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const token = useSelector((state) => state.content);
  const userName = token && token.accessToken ? token.accessToken[1] : null;

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="/">
        <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" /> I feel Sardegna
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/esperienze">Esperienze</Nav.Link>
        </Nav>
        <Nav>
          {token ? <Nav.Link>{`Benvenuto ${userName}`}</Nav.Link> : <Nav.Link href="/login">Login/Registrati</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
