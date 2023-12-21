import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AutunnoInBarbagia = () => {
  const [mostraTutto, setMostraTutto] = useState(false);

  const handleMostraTutto = () => {
    setMostraTutto(!mostraTutto);
  };

  return (
    <>
      <NavBar />
      <h1>Autunno in Barbagia</h1>
      <p className="px-5 mx-5 pt-2">
        Sono state ufficializzate le date di inizio, fine e di tutte le tappe di “Autunno in Barbagia“, uno degli eventi
        simbolo della bassa stagione in Sardegna, quando si va alla scoperta delle tradizioni dei paesi dell'interno
        dell'Isola.
      </p>
      <p>Si svolgerà dal 2 settembre al 17 dicembre 2023, con protagonisti ben 33 paesi della Barbagia</p>

      <h4>Di seguito il calendario completo:</h4>
      <div style={{ display: mostraTutto ? "block" : "none" }}>
        <Row className="my-3 align-items-center">
          <Col>
            <h5>SETTEMBRE</h5>
            <ul className="list-unstyled">
              <li>
                2 e 3 settembre 2023:
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>BITTI</Link>
              </li>
              <li>
                9 e 10 settembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OLIENA</Link>
              </li>
              <li>
                16 e 17 settembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>SARULE</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>TETI</Link>
              </li>
              <li>
                23 e 24 settembre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>AUSTIS</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ORANI</Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>OTTOBRE</h5>
            <ul className="list-unstyled">
              <li>
                30 settembre, 1 e 2 ottobre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>DORGALI</Link>,
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>LULA </Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OROTELLI</Link>
              </li>
              <li>
                7 e 8 ottobre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>GAVOI</Link>,
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>LOLLOVE </Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>TONARA</Link>
              </li>
              <li>
                14 e 15 ottobre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>MEANA SARDO</Link>,
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ONANÌ </Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ORGOSOLO</Link>
              </li>
              <li>
                21 e 22 ottobre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>BELVÌ</Link>,
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OTTANA </Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>SA INNENNA A SORGONO</Link>
              </li>
              <li>
                28 e 29 ottobre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ARITZO</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OLZAI </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="my-3 align-items-center">
          <Col>
            <h5>NOVEMBRE</h5>
            <ul className="list-unstyled">
              <li>
                1, 2, 3, 4 e 5 novembre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>DESULO</Link>
              </li>
              <li>
                3, 4 e 5 novembre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>MAMOIADA</Link>
              </li>
              <li>
                4 e 5 novembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OVODDA</Link>
              </li>
              <li>
                11 e 12 novembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>NUORO</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>TIANA </Link>
              </li>
              <li>
                18 e 19 novembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ATZARA</Link>
              </li>
              <li>
                25 e 26 novembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>OLLOLAI</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>LODINE </Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5>DICEMBRE</h5>
            <ul className="list-unstyled">
              <li>
                2 e 3 dicembre 2023:<Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>GADONI</Link> e
                <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ONIFERI </Link> e
              </li>
              <li>
                8, 9 e 10 dicembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>FONNI</Link>
              </li>
              <li>
                9 e 10 dicembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ORTUERI</Link>
              </li>
              <li>
                16 e 17 dicembre 2023: <Link to={"https://maps.app.goo.gl/2FeXhaFCxU3tLh4C8"}>ORUNE</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <Button onClick={handleMostraTutto}>{mostraTutto ? "Nascondi" : "Mostra tutto"}</Button>
      <Footer />
    </>
  );
};

export default AutunnoInBarbagia;
