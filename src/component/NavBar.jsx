import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top" /> I feel Sardegna
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Esperienze</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#link">Login/Registrati</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
