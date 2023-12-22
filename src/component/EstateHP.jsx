import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { FaHeart, FaHeartBroken, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const EstasteHP = () => {
  const [mari, setMari] = useState([]);
  const [mariSelected, setMariSelected] = useState([]);
  const [spiaggiaFilters, setSpiaggiaFilters] = useState([]);
  const [mareFilters, setMareFilters] = useState([]);
  const [areChecklistsValid, setAreChecklistsValid] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMare, setSelectedMare] = useState(null);

  const openModal = (città) => {
    setSelectedMare(città);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMare(null);
    setModalOpen(false);
  };
  const [isClickedOn, setIsClickedOn] = useState(false);
  const [isClickedOff, setIsClickedOff] = useState(false);

  const handleHeartClick = () => {
    setIsClickedOn(!isClickedOn);
    addMareAiPreferiti(selectedMare);
  };

  const handleBrokenHeartClick = () => {
    setIsClickedOff(!isClickedOff);
    removeMareAiPreferiti(selectedMare);
  };

  const addMareAiPreferiti = (mare) => {
    dispatch({
      type: "ADD_MARE_AI_PREFERITI",
      payload: mare,
    });
    setIsClickedOn(true);
    setTimeout(() => {
      setIsClickedOn(false);
    }, 2000);
  };

  const removeMareAiPreferiti = (mare) => {
    dispatch({
      type: "REMOVE_MARE_DAI_PREFERITI",
      payload: mare,
    });
    setIsClickedOff(true);
    setTimeout(() => {
      setIsClickedOff(false);
    }, 2000);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:3001/mari")
      .then((response) => response.json())
      .then((data) => {
        const allMari = data.content;
        setMari(allMari);
        setMariSelected(allMari);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei mari:", error);
      });
  }, []);

  const applyFilters = (mari, spiaggiaFilters, mareFilters) => {
    return mari.filter((m) => {
      const spiaggiaDetails = m.spiaggiaDetails || [];
      const mareDetails = m.mareDetails || [];

      const matchingSpiaggia =
        spiaggiaFilters.length === 0 || spiaggiaFilters.every((filter) => spiaggiaDetails.includes(filter));

      const matchingMare = mareFilters.length === 0 || mareFilters.every((filter) => mareDetails.includes(filter));

      return matchingSpiaggia || matchingMare;
    });
  };

  const handleSearch = () => {
    const filteredMari = applyFilters(mari, spiaggiaFilters, mareFilters);
    setMariSelected(filteredMari);
  };

  const handleSearchEmpty = () => {
    setSpiaggiaFilters([]);
    setMareFilters([]);
    setMariSelected(mari);
    setAreChecklistsValid(false);
  };

  const handleCheckboxChange = (filter, filterType) => {
    if (filterType === "spiaggia") {
      setSpiaggiaFilters((prevFilters) => {
        const updatedFilters = prevFilters.includes(filter)
          ? prevFilters.filter((f) => f !== filter)
          : [...prevFilters, filter];

        setAreChecklistsValid(updatedFilters.length > 0 && mareFilters.length > 0);

        return updatedFilters;
      });
    } else if (filterType === "mare") {
      setMareFilters((prevFilters) => {
        const updatedFilters = prevFilters.includes(filter)
          ? prevFilters.filter((f) => f !== filter)
          : [...prevFilters, filter];

        setAreChecklistsValid(spiaggiaFilters.length > 0 && updatedFilters.length > 0);

        return updatedFilters;
      });
    }
  };

  return (
    <>
      <NavBar />

      <h2>Filtra il mare che vorresti vedere</h2>
      <div className="d-flex justify-content-center my-3">
        <div className="mx-2">
          <h3>Spiaggia</h3>
          <div id="checklist">
            <input
              value="Grossa"
              name="Grossa"
              type="checkbox"
              id="01"
              checked={spiaggiaFilters.includes("Grossa")}
              onChange={() => handleCheckboxChange("Grossa", "spiaggia")}
            />
            <label htmlFor="01">Grossa</label>
            <input
              value="Fine"
              name="Fine"
              type="checkbox"
              id="02"
              checked={spiaggiaFilters.includes("Fine")}
              onChange={() => handleCheckboxChange("Fine", "spiaggia")}
            />
            <label htmlFor="02">Fine</label>
          </div>
        </div>
        <div className="mx-2">
          <h3>Mare</h3>
          <div id="checklist">
            <input
              value="Fredda"
              name="Fredda"
              type="checkbox"
              id="04"
              checked={mareFilters.includes("Fredda")}
              onChange={() => handleCheckboxChange("Fredda", "mare")}
            />
            <label htmlFor="04">Fredda</label>
            <input
              value="Azzurra"
              name="Azzurra"
              type="checkbox"
              id="05"
              checked={mareFilters.includes("Azzurra")}
              onChange={() => handleCheckboxChange("Azzurra", "mare")}
            />
            <label htmlFor="05">Azzurra</label>
            <input
              value="Verde"
              name="Verde"
              type="checkbox"
              id="06"
              checked={mareFilters.includes("Verde")}
              onChange={() => handleCheckboxChange("Verde", "mare")}
            />
            <label htmlFor="06">Verde</label>
          </div>
        </div>
      </div>
      <div>
        <Button onClick={handleSearch} disabled={!areChecklistsValid} className="mx-2">
          {" "}
          Filtra
        </Button>
        <Button onClick={handleSearchEmpty} disabled={!areChecklistsValid}>
          {" "}
          Reset
        </Button>
      </div>

      <div>
        <Modal isOpen={modalOpen} show={selectedMare !== null} toggle={closeModal} className="mt-3 z-5">
          <div
            className="modal-content"
            style={{
              backgroundImage: `url(${selectedMare ? selectedMare.cover : null})`,
              backgroundSize: "cover",
            }}
          >
            <FaTimes className="fa-mixer-icon" onClick={closeModal} />
            <h2 className="ps-2">{selectedMare ? selectedMare.name : null}</h2>
            <p className="ps-2">{selectedMare ? selectedMare.text : null}</p>

            <div className="d-flex">
              <FaHeart
                className={`m-2 heart-icon ${isClickedOn ? "clicked" : ""}`}
                style={{ fontSize: "xx-large", cursor: "pointer" }}
                onClick={handleHeartClick}
              />

              <FaHeartBroken
                className={`m-2 heart-broken-icon ${isClickedOff ? "clicked" : ""}`}
                style={{ fontSize: "xx-large", cursor: "pointer" }}
                onClick={handleBrokenHeartClick}
              />
            </div>
          </div>
        </Modal>

        <h3>Ecco i mari secondo i tuoi filtri</h3>
        <Row className="mx-2 z-1" cols="1" colsm="2" colm="4" coll="5">
          {mariSelected.map((m) => (
            <Col className="d-flex justify-content-center my-2 z-1">
              <Card
                className="cardHome2 justify-content-start z-1"
                style={{
                  backgroundImage: `url(${m ? m.cover : null})`,
                  backgroundSize: "cover",
                }}
                onClick={() => openModal(m)}
              >
                <div key={m.id}>
                  <p>{m.name}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default EstasteHP;
