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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/esperienze" element={<Esperienze />} />
          <Route path="/province" element={<ProvinceCapoluoghi />} />
          <Route path="/esperienze/estive" element={<VacanzeEstive />} />
          <Route path="/esperienze/invernali" element={<VacanzeInvernali />} />
          <Route path="/esperienze/centritermali" element={<CentriTermali />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
