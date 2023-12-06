import { Card, Col, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const VacanzeEstive = () => {
  const token = useSelector((state) => state.content);
  const [mari, setMari] = useState([]);
  const [città, setCittà] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [size, setSize] = useState(10);
  const [order, setOrder] = useState("id");

  const fetchMari = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/mari?page=${page}&size=${size}&orderBy=${order}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setMari(data.content);
      setSize(data.pageable.pageSize);
      setPage(data.pageable.pageNumber);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCittà = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/città?page=${page}&size=${size}&orderBy=${order}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setCittà(data.content);
      setSize(data.pageable.pageSize);
      setPage(data.pageable.pageNumber);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMari();
    fetchCittà();
  }, [page, size, order]);

  return (
    <>
      <NavBar />
      <h3>
        Benvenuto in Sardegna, il paradiso estivo che hai sempre sognato! Con le nostre città affascinanti, spiagge
        incantevoli e una cultura vibrante, un'avventura indimenticabile ti attende!
      </h3>
      <h4>Visita le nostre migliori città</h4>
      <Row className="justify-content-center mt-3">
        {città.map((città, index) => (
          <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
            <img src={città.cover} alt="" width={"250px"} />
            <h3>{città.name}</h3>
            <span>{città.text}</span>
          </Col>
        ))}
      </Row>
      <h4 className="mt-3">Goditi i nostri mari</h4>
      <Row className="justify-content-center mt-3">
        {mari.map((mari, index) => (
          <Col xs="12" sm="6" md="4" lg="3" className="card1 mx-4 mb-3">
            <img src={mari.cover} alt="" width={"250px"} />
            <h3>{mari.name}</h3>
            <span>{mari.text}</span>
          </Col>
        ))}
      </Row>
      <Footer />
    </>
  );
};

export default VacanzeEstive;
