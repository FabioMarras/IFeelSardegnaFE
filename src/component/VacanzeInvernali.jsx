import { Col, Nav, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const VacanzeInvernali = () => {
  return (
    <>
      <NavBar />
      <h1>Vacanze invernali</h1>
      <h4>Il nostro inverno</h4>
      <Row className="justify-content-center mt-3 my-row">
        <Link to="/esperienze/centritermali" className="fw-bolder p-3 link-no-style">
          <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
            Le nostre terme
          </Col>
        </Link>
        <Link to="/autunnoBarbagia" className="fw-bolder p-3 link-no-style">
          <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
            Autunno in barbaggia
          </Col>
        </Link>
        <Link to="/esperienze/estive" className="fw-bolder p-3 link-no-style">
          <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
            Sciare
          </Col>
        </Link>
      </Row>
      <Footer />
    </>
  );
};
export default VacanzeInvernali;
