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
          <Nav.Link href="/esperienze" className="fw-bolder">
            <button class="cta">
              <span class="hover-underline-animation"> Esperienze </span>
            </button>
          </Nav.Link>
          <Nav.Link href="/province" className="fw-bolder">
            <button class="cta">
              <span class="hover-underline-animation"> Province e Capoluoghi</span>
            </button>
          </Nav.Link>
          {token ? (
            <Nav.Link href="/preferiti" className="fw-bolder">
              <button class="cta">
                <span class="hover-underline-animation"> Preferiti </span>
              </button>
            </Nav.Link>
          ) : null}
        </Nav>
        <Nav>
          {token ? (
            <Nav.Link href="/myProfile">{`Benvenuto ${userName}`}</Nav.Link>
          ) : (
            <Nav.Link href="/login">
              <button class="cta">
                <span class="hover-underline-animation"> Login/Registrati </span>
              </button>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
