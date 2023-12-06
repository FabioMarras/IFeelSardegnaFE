import { Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

const VacanzeInvernali = () => {
  return (
    <>
      <NavBar />
      <h1>Vacanze invernali</h1>
      <h4>Il nostro inverno</h4>
      <Row className="justify-content-center mt-3">
        <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
          Click me
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default VacanzeInvernali;
