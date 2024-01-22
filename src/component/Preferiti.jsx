import { useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Card, Nav, Row } from "react-bootstrap";

const Preferiti = () => {
  const cityPrefer = useSelector((state) => state.addCityPrefer.preferiti);
  const mariPrefer = useSelector((state) => state.MariPrefer.preferiti);
  const TermePrefer = useSelector((state) => state.TermePrefer.preferiti);

  return (
    <>
      <NavBar />
      {cityPrefer.length > 0 || mariPrefer.length > 0 ? (
        <div>
          <h1>Preferiti</h1>

          {cityPrefer.length > 0 && (
            <>
              <h3>Le mie città preferite:</h3>
              <Row className="mx-2 justify-content-center">
                {cityPrefer.map((città, index) => (
                  <Card className="max-w-sm mx-1 my-2 p-0" cols="1" colsm="2" colm="4" coll="5">
                    <img src={città.cover} alt="" style={{ width: "100%", height: "auto" }} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{città.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{città.text}</p>
                  </Card>
                ))}
              </Row>
            </>
          )}

          {mariPrefer.length > 0 && (
            <>
              <h3>I miei mari preferiti:</h3>
              <Row className="mx-2 justify-content-center">
                {mariPrefer.map((mare, index) => (
                  <Card className="max-w-sm mx-1 my-2 p-0" cols="1" colsm="2" colm="4" coll="5">
                    <img src={mare.cover} alt="" style={{ width: "100%", height: "auto" }} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{mare.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{mare.text}</p>
                  </Card>
                ))}
              </Row>
            </>
          )}
          {TermePrefer.length > 0 && (
            <>
              <h3>Le mie terme preferite:</h3>
              <Row className="mx-2 justify-content-center">
                {TermePrefer.map((terma, index) => (
                  <Card className="max-w-sm mx-1 my-2 p-0" cols="1" colsm="2" colm="4" coll="5">
                    <img src={terma.cover} alt="" style={{ width: "100%", height: "auto" }} />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{terma.name}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{terma.text}</p>
                  </Card>
                ))}
              </Row>
            </>
          )}
        </div>
      ) : (
        <div>
          <h4 className="mt-3">Aggiungi le tue città, i tuoi mari preferiti o le tue terme dalla sezione:</h4>
          <div className="d-flex justify-content-center">
            <Nav.Link href="/esperienze/estive" className="fw-bolder p-3">
              <h3 className="hover-underline-animation text-success">Città/mari</h3>
            </Nav.Link>
            <Nav.Link href="/esperienze/centritermali" className="fw-bolder p-3">
              <h3 className="hover-underline-animation text-success">Terme</h3>
            </Nav.Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Preferiti;
