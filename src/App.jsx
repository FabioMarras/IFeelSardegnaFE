import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Esperienze from "./component/Esperienze";
import ProvinceCapoluoghi from "./component/ProvinceCapoluoghi";
import VacanzeEstive from "./component/VacanzeEstive";
import CentriTermali from "./component/CentriTermali";
import VacanzeInvernali from "./component/VacanzeInvernali";
import Preferiti from "./component/Preferiti";
import Profile from "./component/Profile";
import Mamuthones from "./component/Mamuthones";
import Ichnusa from "./component/Icnhusa";
import EstasteHP from "./component/EstateHP";
import AutunnoInBarbagia from "./component/AutunnoInBarbagia";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profilo" element={<Profile />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/ichnusa" element={<Ichnusa />} />
          <Route path="/estate" element={<EstasteHP />} />
          <Route path="/autunnoBarbagia" element={<AutunnoInBarbagia />} />
          <Route path="/province" element={<ProvinceCapoluoghi />} />
          <Route path="/preferiti" element={<Preferiti />} />
          <Route path="/mamuthones" element={<Mamuthones />} />
          <Route path="/esperienze/estive" element={<VacanzeEstive />} />
          <Route path="/esperienze/invernali" element={<VacanzeInvernali />} />
          <Route path="/esperienze/centritermali" element={<CentriTermali />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
