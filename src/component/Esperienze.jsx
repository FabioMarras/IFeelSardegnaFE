import { Col, Nav, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import imgEstiva from "../748551363d2130b2b9a3a29040a0f952.jpg";
import imgInvernale from "../640px-BruncuSpina.jpg";
import terme from "../8873_20140905044410-1024x682.jpg";
import { NavLink } from "react-router-dom";

const Esperienze = () => {
  return (
    <>
      <NavBar />
      <h1>Esperienze</h1>
      <div className="d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col xs="4" className="card mx-4 mb-3 d-flex justify-content-center">
            <div className="bg">
              <NavLink to="/esperienze/estive">
                <img src={imgEstiva} alt="img" width={"250px"} />
              </NavLink>
            </div>
            <div className="blob"></div>
            <span className="z-1 fs-3 fw-bold mb-auto mt-1">Vacanze estive</span>
          </Col>
          <Col xs="4" className="card mx-4 mb-3">
            <div className="bg">
              <NavLink to="/esperienze/centritermali">
                <img src={terme} alt="img" width={"500px"} />
              </NavLink>
            </div>
            <div className="blob2"></div>
            <span className="z-1 fs-3 fw-bold mb-auto mt-1">Centri termali</span>
          </Col>

          <Col xs="4" className="card mx-4 mb-3">
            <div className="bg">
              <NavLink to="/esperienze/invernali">
                <img src={imgInvernale} alt="img" width={"450px"} />
              </NavLink>
            </div>
            <div className="blob1"></div>
            <span className="z-1 fs-3 fw-bold mb-auto mt-1">Vacanze invernali</span>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};
export default Esperienze;
