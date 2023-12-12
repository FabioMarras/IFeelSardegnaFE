import Footer from "./Footer";
import NavBar from "./NavBar";
import foto from "../d65d3953-8d3a-4952-873a-8a9a09b91a6e.jpg";
import mamuthones from "../mamuthones.jpeg";
import ichnusa from "../ichnusa.jpg";
import mare from "../mare.jpg";
import inverno from "../mercatini-di-natale-in-sardegna.jpg";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="position-relative mt-3">
        <h1 className="imgHome textImgHome">UN ISOLA, UN POPOLO.</h1>
        <img src={foto} alt="" className="img-fluid" />
      </div>
      <section className="text-center my-4 mHome">
        <h3>Un Isola che aspetta di essere scoperta. A modo vostro. </h3>
        <p>
          La Sardegna, gioiello nel cuore del Mar Mediterraneo, accoglie i visitatori con le sue spiagge di sabbia
          dorata lambite da acque cristalline. Un viaggio in questa affascinante isola offre un connubio tra la bellezza
          naturale, con paesaggi mozzafiato e una ricca storia che si riflette nei suoi siti archeologici e tradizioni
          secolari. Dal litorale incontaminato alle affascinanti città, la Sardegna promette un'esperienza
          indimenticabile in un contesto di autentica bellezza e cultura.
        </p>
      </section>
      <section className="mt-4">
        <h3>Scoprici</h3>
        <div class="input-container">
          <input
            type="text"
            id="input"
            required=""
            placeholder="Cerca città, mari, esperienze!"
            className="text-center"
          ></input>
          <div class="underline"></div>
        </div>
      </section>
      <section className="text-center my-4 mHome">
        <h3>Storie dalla Sardegna</h3>
        <p>Cercate l'ispirazione per il vostro viaggio nelle storie dalla Sardegna.</p>
      </section>
      <Row className="justify-content-center mt-4">
        <Col
          xs="6"
          className="cardHome mx-4 mb-3"
          style={{
            backgroundImage: `url(${mamuthones})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></Col>
        <Col
          xs="6"
          className="cardHome mx-4 mb-3 "
          style={{
            backgroundImage: `url(${ichnusa})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></Col>
        <Col
          xs="6"
          className="cardHome mx-4 mb-3"
          style={{
            backgroundImage: `url(${mare})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></Col>
        <Col
          xs="6"
          className="cardHome mx-4 mb-3"
          style={{
            backgroundImage: `url(${inverno})`,
            backgroundSize: "cover",
          }}
        ></Col>
      </Row>

      <Footer />
    </>
  );
};

export default Home;
