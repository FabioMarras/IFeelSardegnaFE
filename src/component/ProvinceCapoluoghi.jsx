import { useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ProvinceCapoluoghi = () => {
  const token = useSelector((state) => state.content);
  const [province, setProvince] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [size, setSize] = useState(10);
  const [order, setOrder] = useState("id");

  const fetchProvince = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/province?page=${page}&size=${size}&orderBy=${order}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setProvince(data.content);
      setSize(data.pageable.pageSize);
      setPage(data.pageable.pageNumber);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProvince();
  }, [page, size, order]);

  return (
    <>
      <NavBar />
      <h1>Province</h1>
      {province.map((province, index) => (
        <Row className="mb-5 mx-5">
          <Col xs="6">
            <img
              src={province.capoluoghi[0].cover}
              alt="img provincia"
              width={"250px"}
              height={"250px"}
              className="rounded-circle"
            />
          </Col>
          <Col xs="6">
            <h3>{province.name}</h3>
            <h5>{province.introText}</h5>
            <p>{province.text}</p>
            <div>
              <p>Capoluogo: {province.capoluoghi[0].name}</p>
              <p>
                {province.capoluoghi[0].introText}
                {province.capoluoghi[0].text}
              </p>
            </div>
          </Col>
        </Row>
      ))}
      <Footer />
    </>
  );
};
export default ProvinceCapoluoghi;
