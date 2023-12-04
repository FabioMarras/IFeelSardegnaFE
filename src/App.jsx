import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Esperienze from "./component/Esperienze";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/esperienze" element={<Esperienze />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
