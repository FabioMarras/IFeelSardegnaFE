import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import logo from "../I FEEL SARDEGNA.png";
import { logout } from "../redux/actions";
import { FaHeart, FaPiedPiperAlt, FaRegCompass } from "react-icons/fa";

const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.mainReducer.content);
  const userName = token && token.accessToken ? token.accessToken[1] : null;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img alt="Logo" src={logo} width="130" height="80" className="d-inline-block align-top" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/esperienze" className="fw-bolder">
              <span className="m-2" style={{ fontSize: "large", cursor: "pointer" }}>
                <FaPiedPiperAlt />
              </span>
              <span className="hover-underline-animation">Esperienze</span>
            </Nav.Link>
            <Nav.Link href="/province" className="fw-bolder">
              <span className="m-2" style={{ fontSize: "large", cursor: "pointer" }}>
                <FaRegCompass />
              </span>
              <span className="hover-underline-animation">Province e Capoluoghi</span>
            </Nav.Link>
            {token ? (
              <Nav.Link href="/preferiti" className="fw-bolder">
                <span>
                  <FaHeart className="m-2" style={{ fontSize: "large", cursor: "pointer" }} />
                </span>
                <span className="hover-underline-animation">Preferiti</span>
              </Nav.Link>
            ) : null}
          </Nav>
          <Nav>
            {token ? (
              <NavDropdown title={`Benvenuto ${userName}`} id="basic-nav-dropdown" className="z-2">
                <NavDropdown.Item href="/profilo">Profilo</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">
                <button className="cta">
                  <span className="hover-underline-animation">Login/Registrati</span>
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
