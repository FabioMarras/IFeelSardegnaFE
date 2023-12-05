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
        <Nav.Link href="/esperienze/estive">
          <div className="card mx-4 mb-3 ">
            <div className="bg">
              <img src={imgEstiva} alt="img" width={"250px"} />
            </div>
            <div className="blob"></div>
          </div>
        </Nav.Link>
        <Nav.Link href="/esperienze/centritermali">
          <div className="card mx-4 mb-3">
            <div className="bg">
              <img src={terme} alt="img" width={"380px"} />
            </div>
            <div className="blob2"></div>
          </div>
        </Nav.Link>
        <Nav.Link href="/esperienze/invernali">
          <div className="card mx-4 mb-3">
            <div className="bg">
              <img src={imgInvernale} alt="img" width={"350px"} />
            </div>
            <div className="blob1"></div>
          </div>
        </Nav.Link>
      </div>
      <Footer />
    </>
  );
};
export default Esperienze;
