import Footer from "./Footer";
import NavBar from "./NavBar";
import img from "../8873_20140905044410-1024x682.jpg";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const CentriTermali = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };

  return (
    <>
      <NavBar />
      <h1>Centri termali</h1>
      <Row className="justify-content-center mt-4">
        <Col xs="12" sm="6" md="4" lg="3" className="card2 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card2 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card2 mx-4 mb-3">
          Click me
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="card2 mx-4 mb-3">
          Click me
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default CentriTermali;
