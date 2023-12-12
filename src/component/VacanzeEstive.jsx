import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaHeartBroken, FaTimes } from "react-icons/fa";

const VacanzeEstive = () => {
  const token = useSelector((state) => state.content);
  const [mari, setMari] = useState([]);
  const [città, setCittà] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [size, setSize] = useState(10);
  const [order, setOrder] = useState("id");
  const [isClickedon, setIsClickedon] = useState(false);
  const [isClickedoff, setIsClickedoff] = useState(false);

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCittà, setSelectedCittà] = useState(null);

  const openModal = (città) => {
    setSelectedCittà(città);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCittà(null);
    setModalOpen(false);
  };

  const [selectedMare, setSelectedMare] = useState(null);

  const openModalMare = (mare) => {
    setSelectedMare(mare);
    setModalOpen(true);
  };

  const closeModalMare = () => {
    setSelectedMare(null);
    setModalOpen(false);
  };

  const addMareAiPreferiti = (mare) => {
    dispatch({
      type: "ADD_MARE_AI_PREFERITI",
      payload: mare,
    });
    setIsClickedon(true);
    setTimeout(() => {
      setIsClickedon(false);
    }, 2000);
  };

  const removeMareAiPreferiti = (mare) => {
    dispatch({
      type: "REMOVE_MARE_DAI_PREFERITI",
      payload: mare,
    });
    setIsClickedoff(true);
    setTimeout(() => {
      setIsClickedoff(false);
    }, 2000);
  };

  const dispatch = useDispatch();

  const addCittàAiPreferiti = (città) => {
    dispatch({
      type: "ADD_CITA_AI_PREFERITI",
      payload: città,
    });
    setIsClickedon(true);
    setTimeout(() => {
      setIsClickedon(false);
    }, 2000);
  };

  const removeCittàAiPreferiti = (città) => {
    dispatch({
      type: "REMOVE_CITTÀ_DAI_PREFERITI",
      payload: città,
    });
    setIsClickedoff(true);
    setTimeout(() => {
      setIsClickedoff(false);
    }, 2000);
  };

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
          <Col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            key={index}
            className="card1 mx-4 mb-3"
            style={{
              backgroundImage: `url(${città.cover})`,
              backgroundSize: "cover",
            }}
            onClick={() => openModal(città)}
          >
            <h3 className="text-white fst-italic" tex>
              {città.name}
            </h3>
            {/* <span>{città.text}</span> */}
          </Col>
        ))}
      </Row>

      <Modal isOpen={modalOpen} show={selectedCittà !== null} toggle={closeModal} className="mt-3">
        <div
          className="modal-content"
          style={{
            backgroundImage: `url(${selectedCittà ? selectedCittà.cover : null})`,
            backgroundSize: "cover",
          }}
        >
          <FaTimes className="fa-mixer-icon" onClick={closeModal} />
          <h2>{selectedCittà ? selectedCittà.name : null}</h2>
          <p>{selectedCittà ? selectedCittà.text : null}</p>

          <div className="d-flex">
            <FaHeart
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedon ? "red" : "black" }}
              onClick={() => {
                addCittàAiPreferiti(selectedCittà);
              }}
            />

            <FaHeartBroken
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedoff ? "red" : "black" }}
              onClick={() => {
                removeCittàAiPreferiti(selectedCittà);
              }}
            />
          </div>
        </div>
      </Modal>

      <h4 className="mt-3">Goditi i nostri mari</h4>
      <Row
        className="justify-content-center mt-3"
        style={{
          backgroundImage: `url(${mari.cover})`,
          backgroundSize: "cover",
        }}
      >
        {mari.map((mare, index) => (
          <Col
            xs="12"
            sm="6"
            md="4"
            lg="3"
            key={index}
            className="card1 mx-4 mb-3"
            style={{
              backgroundImage: `url(${mare.cover})`,
              backgroundSize: "cover",
            }}
            onClick={() => openModalMare(mare)}
          >
            <h3>{mare.name}</h3>
          </Col>
        ))}
      </Row>

      <Modal isOpen={openModalMare} show={selectedMare !== null} toggle={closeModalMare} className="mt-3">
        <div
          className="modal-content"
          style={{
            backgroundImage: `url(${selectedMare ? selectedMare.cover : null})`,
            backgroundSize: "cover",
          }}
        >
          <FaTimes className="fa-mixer-icon" onClick={closeModalMare} />
          <h2>{selectedMare ? selectedMare.name : null}</h2>
          <p>{selectedMare ? selectedMare.text : null}</p>

          <div className="d-flex">
            <FaHeart
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedon ? "red" : "black" }}
              onClick={() => {
                addMareAiPreferiti(selectedMare);
              }}
            />
            <FaHeartBroken
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedoff ? "red" : "black" }}
              onClick={() => {
                removeMareAiPreferiti(selectedMare);
              }}
            />
          </div>
        </div>
      </Modal>

      <Footer />
    </>
  );
};

export default VacanzeEstive;
