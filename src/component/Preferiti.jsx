import { useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MariPrefer from "../redux/reducer/MariPrefer";
import { Nav } from "react-bootstrap";

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
              {cityPrefer.map((città, index) => (
                <h5 key={index}>{città.name}</h5>
              ))}
            </>
          )}

          {mariPrefer.length > 0 && (
            <>
              <h3>I miei mari preferiti:</h3>
              {mariPrefer.map((mare, index) => (
                <h5 key={index}>{mare.name}</h5>
              ))}
            </>
          )}
          {TermePrefer.length > 0 && (
            <>
              <h3>Le mie terme preferite:</h3>
              {TermePrefer.map((terma, index) => (
                <h5 key={index}>{terma.name}</h5>
              ))}
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
