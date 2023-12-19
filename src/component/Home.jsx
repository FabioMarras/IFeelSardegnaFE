import Footer from "./Footer";
import NavBar from "./NavBar";
import foto from "../d65d3953-8d3a-4952-873a-8a9a09b91a6e.jpg";
import mamuthones from "../mamuthones.jpeg";
import ichnusa from "../ichnusa.jpg";
import mare from "../mare.jpg";
import inverno from "../mercatini-di-natale-in-sardegna.jpg";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Select from "react-select";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedMari, setSelectedMari] = useState(null);
  const [cities, setCities] = useState([]);
  const [mari, setMari] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCityInfo, setSelectedCityInfo] = useState(null);
  const [selectedMariInfo, setSelectedMariInfo] = useState(null);
  const [mariSelected, setMariSelected] = useState(null);
  const [citySelected, setCitySelected] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const token = useSelector((state) => state.mainReducer?.content?.accessToken[0]);

  const fetchAddComments = async () => {
    try {
      const updatedInfo = {
        testo: commentText,
      };
      const resp = await fetch(`http://localhost:3001/recensioni/città/${selectedCityInfo.id}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      });
      if (resp.ok) {
        setCommentText("");
        const updatedComments = [...comments, { testo: commentText }];
        setComments(updatedComments);
      } else {
        setError("Qualche campo non è corretto!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAddCommentsMari = async () => {
    try {
      const updatedInfo = {
        testo: commentText,
      };
      const resp = await fetch(`http://localhost:3001/recensioni/mari/${selectedMariInfo.id}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ` + token,
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedInfo),
      });
      if (resp.ok) {
        setCommentText("");
        const updatedComments = [...comments, { testo: commentText }];
        setComments(updatedComments);
      } else {
        setError("Qualche campo non è corretto!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/città")
      .then((response) => response.json())
      .then((data) => {
        const cityNames = data.content.map((city) => city.name);
        setCities(cityNames);
        const allCity = data.content;
        setCitySelected(allCity);
      })
      .catch((error) => {
        console.error("Errore durante il recupero delle città:", error);
      });
    fetch("http://localhost:3001/mari")
      .then((response) => response.json())
      .then((data) => {
        const mariNames = data.content.map((mari) => mari.name);
        setMari(mariNames);
        const allMari = data.content;
        setMariSelected(allMari);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei mari:", error);
      });
  }, [selectedCityInfo]);

  const handleChange = (selectedOption) => {
    const cityDetails = citySelected.find((city) => city.name === selectedOption.value);
    setSelectedCityInfo(cityDetails);
    setSelectedCity(selectedOption);
    const mariDetails = mariSelected.find((mari) => mari.name === selectedOption.value);
    setSelectedMariInfo(mariDetails);
    setSelectedMari(selectedOption);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInputValue("");
  };

  return (
    <>
      <NavBar />
      <div className="position-relative ">
        <h1 className="imgHome textImgHome">UN ISOLA, UN POPOLO.</h1>
        <img src={foto} alt="" className="img-fluid" />
      </div>
      <section className="text-center my-4 mHome">
        <h3 className="fontCursive">Un Isola che aspetta di essere scoperta. A modo vostro. </h3>
        <p className="fontText">
          La Sardegna, gioiello nel cuore del Mar Mediterraneo, accoglie i visitatori con le sue spiagge di sabbia
          dorata lambite da acque cristalline. Un viaggio in questa affascinante isola offre un connubio tra la bellezza
          naturale, con paesaggi mozzafiato e una ricca storia che si riflette nei suoi siti archeologici e tradizioni
          secolari. Dal litorale incontaminato alle affascinanti città, la Sardegna promette un'esperienza
          indimenticabile in un contesto di autentica bellezza e cultura.
        </p>
      </section>
      <section className="mt-4">
        <h3 className="fontCursive">Scoprici</h3>
        <div className="input-container">
          <Select
            className="custom-select "
            value={selectedCity}
            inputValue={inputValue}
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={[
              ...cities.map((city) => ({ value: city, label: `Città: ${city}` })),
              ...mari.map((mare) => ({ value: mare, label: `Mare: ${mare}` })),
            ]}
            placeholder="Cerca città e mari!"
            isSearchable
          />
          <Button className="mt-2" onClick={openModal}>
            Visualizza
          </Button>
        </div>
        <Modal show={modalOpen} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCityInfo?.label}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            {selectedCityInfo && (
              <div>
                <div
                  className="p-3 position-relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${
                      selectedCityInfo ? selectedCityInfo.cover : null
                    })`,
                    backgroundSize: "cover",
                    color: "white",
                  }}
                >
                  <div className="overlay">
                    <h3 className="fw-bold border-bottom border-white pb-2">{selectedCityInfo.name}</h3>
                    <h5 className="fw-bold border-bottom border-white pb-2">{selectedCityInfo.text}</h5>
                  </div>
                </div>

                {token && selectedCityInfo && (
                  <div className="my-3">
                    <Form.Control
                      className="my-1"
                      type="text"
                      placeholder="Scrivi la tua recensione qua"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button onClick={fetchAddComments}>Invia recensione</Button>
                  </div>
                )}

                <h4 className="ps-1">Recensioni degli utenti:</h4>
                {selectedCityInfo.commenti &&
                  selectedCityInfo.commenti.map((commento, index) => (
                    <p key={index} className="ps-3">
                      <li> {commento.testo}</li>
                    </p>
                  ))}
                {comments.map((commento, index) => (
                  <p key={index}>Recensione: {commento.testo}</p>
                ))}
              </div>
            )}
            {selectedMariInfo && (
              <>
                <p>Nome del mare: {selectedMariInfo.name}</p>
                <p>Descrizione del mare: {selectedMariInfo.text}</p>
                {token && selectedMariInfo && (
                  <div className="my-3">
                    <Form.Control
                      className="my-1"
                      type="text"
                      placeholder="Scrivi la tua recensione qua"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <Button onClick={fetchAddComments}>Invia recensione</Button>
                  </div>
                )}
                {selectedMariInfo.commenti &&
                  selectedMariInfo.commenti.map((commento, index) => <p key={index}>Recensione: {commento.testo}</p>)}
                {comments.map((commento, index) => (
                  <p key={index}>Recensione: {commento.testo}</p>
                ))}
              </>
            )}
          </Modal.Body>
        </Modal>
      </section>
      <section className="text-center my-4 mHome">
        <h3 className="fontCursive">Storie dalla Sardegna</h3>
        <p className="fontText">Cercate l'ispirazione per il vostro viaggio nelle storie dalla Sardegna.</p>
      </section>
      <Row className="justify-content-center mt-4 my-row">
        <Link to="/mamuthones" className="link-no-style">
          <Col
            xs="6"
            md="3"
            className="cardHome mx-4 mb-3"
            style={{
              backgroundImage: `url(${mamuthones})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Col>
        </Link>
        <Link to="/ichnusa" className="link-no-style">
          <Col
            xs="6"
            md="3"
            className="cardHome mx-4 mb-3"
            style={{
              backgroundImage: `url(${ichnusa})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Col>
        </Link>
        <Link to="/estate" className="link-no-style">
          <Col
            xs="6"
            md="3"
            className="cardHome mx-4 mb-3"
            style={{
              backgroundImage: `url(${mare})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></Col>
        </Link>
        <Link to="/mamuthones" className="link-no-style">
          <Col
            xs="6"
            md="3"
            className="cardHome mx-4 mb-3"
            style={{
              backgroundImage: `url(${inverno})`,
              backgroundSize: "cover",
            }}
          ></Col>
        </Link>
      </Row>

      <Footer />
    </>
  );
};

export default Home;
