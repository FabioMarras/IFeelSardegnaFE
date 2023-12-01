import { Col, Container, Nav, NavLink, Row } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light mt-5">
      <Container>
        <section className="mb-4">
          <Nav className="social-icons justify-content-center">
            <Nav.Link href="#" target="_blank">
              <FaGithub style={{ fontSize: "xx-large" }} />
            </Nav.Link>
            <Nav.Link href="#" target="_blank">
              <FaLinkedin style={{ fontSize: "xx-large" }} />
            </Nav.Link>
          </Nav>
        </section>
        <Row>
          <Col md={6}>
            <h5>Contatti</h5>
            <p className="mb-0">Email: fabio.marras@yahoo.com</p>
            <NavLink>
              <p>Linkedin: FabioMarras</p>
            </NavLink>
          </Col>
          <Col md={6}>
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-decoration-none text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none text-black">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#services" className="text-decoration-none text-black">
                  Servizi
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>&copy; 2023 I feel Sardegna. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
