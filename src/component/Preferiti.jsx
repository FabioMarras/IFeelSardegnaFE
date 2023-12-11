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
      <h1>Preferiti</h1>
      <h3>Le mie città preferite:</h3>
      {cityPrefer.map((città, index) => (
        <h5>{città.name}</h5>
      ))}
      <h3>I miei mari preferiti:</h3>
      {mariPrefer.map((mare, index) => (
        <h5>{mare.name}</h5>
      ))}
      <Footer />
    </>
  );
};

export default Preferiti;
