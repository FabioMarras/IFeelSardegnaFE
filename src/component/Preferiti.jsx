import { useSelector } from "react-redux";
import Footer from "./Footer";
import NavBar from "./NavBar";
import MariPrefer from "../redux/reducer/MariPrefer";

const Preferiti = () => {
  const cityPrefer = useSelector((state) => state.addCityPrefer.preferiti);
  const mariPrefer = useSelector((state) => state.MariPrefer.preferiti);

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
        </div>
      ) : (
        <h3 className="mt-3">Hey, non hai ancora una città preferita.</h3>
      )}
      <Footer />
    </>
  );
};

export default Preferiti;
