import Footer from "./Footer";
import NavBar from "./NavBar";
import img from "../8873_20140905044410-1024x682.jpg";
import { useEffect, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { FaHeart, FaHeartBroken, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CentriTermali = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [terma, setTerma] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [size, setSize] = useState(10);
  const [order, setOrder] = useState("id");

  const handleColorClick = (index) => {
    setSelectedColor(index);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTerma, setSelectedTerma] = useState(null);

  const fetchTerme = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/terme?page=${page}&size=${size}&orderBy=${order}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await resp.json();
      setTerma(data.content);
      setSize(data.pageable.pageSize);
      setPage(data.pageable.pageNumber);
      setTotalPage(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTerme();
  }, [page, size, order]);

  const openModal = (terma) => {
    setSelectedTerma(terma);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTerma(null);
    setModalOpen(false);
  };
  const [isClickedon, setIsClickedon] = useState(false);
  const [isClickedoff, setIsClickedoff] = useState(false);

  const addTermeAiPreferiti = (terma) => {
    dispatch({
      type: "ADD_TERME_AI_PREFERITI",
      payload: terma,
    });
    setIsClickedon(true);
    setTimeout(() => {
      setIsClickedon(false);
    }, 2000);
  };

  const removeTermeAiPreferiti = (terma) => {
    dispatch({
      type: "REMOVE_TERME_DAI_PREFERITI",
      payload: terma,
    });
    setIsClickedoff(true);
    setTimeout(() => {
      setIsClickedoff(false);
    }, 2000);
  };

  const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      <h1>Centri termali</h1>
      <Row className="justify-content-center mt-4">
        {terma.map((terma, index) => (
          <Col xs="12" sm="6" md="4" lg="3" className="card2 mx-4 mb-3" onClick={() => openModal(terma)}>
            {terma.name}
          </Col>
        ))}
      </Row>
      <Modal isOpen={modalOpen} show={selectedTerma !== null} toggle={closeModal} className="mt-3">
        <div
          className="modal-content"
          style={{
            backgroundImage: `url(${selectedTerma ? selectedTerma.cover : null})`,
            backgroundSize: "cover",
          }}
        >
          <FaTimes className="fa-mixer-icon" onClick={closeModal} />
          <h2>{selectedTerma ? selectedTerma.name : null}</h2>
          <p>{selectedTerma ? selectedTerma.text : null}</p>

          <div className="d-flex">
            <FaHeart
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedon ? "red" : "black" }}
              onClick={() => {
                addTermeAiPreferiti(selectedTerma);
              }}
            />

            <FaHeartBroken
              className="m-2"
              style={{ fontSize: "xx-large", cursor: "pointer", color: isClickedoff ? "red" : "black" }}
              onClick={() => {
                removeTermeAiPreferiti(selectedTerma);
              }}
            />
          </div>
        </div>
      </Modal>
      <Footer />
    </>
  );
};

export default CentriTermali;
