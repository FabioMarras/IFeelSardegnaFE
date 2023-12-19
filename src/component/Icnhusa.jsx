import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ichnusaImage from "../Frame1_Ichnusa_Il_Nostro_Orgoglio.jpg";
import ichnusaNormale from "../birra-ichnusa-normale.jpg";
import ichnusaAmbrata from "../ichnusa-ambrata.png";
import ichnusaNonFiltrata from "../371_birra_ichnusa_non_filtrata_50x15.png";

const Ichnusa = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleCheckboxChange = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <NavBar />
      <>
        <h1 className="mb-4">Ichnusa</h1>

        <p>
          L'Ichnusa è una birra sarda con una lunga tradizione e un gusto unico. Scopri di più su questa birra
          eccezionale.
        </p>

        <img src={ichnusaImage} alt="Ichnusa Beer" className="img-fluid mb-4" />

        <section>
          <h2>Storia e Origini</h2>
          <p>La birra Ichnusa ha una storia affascinante che risale a...</p>
        </section>

        <section>
          <h2>Riconoscimenti ricevuti</h2>
          <p>Leggi cosa dicono gli esperti e gli appassionati di birra su Ichnusa. Condividi anche la tua opinione!</p>
        </section>

        <div className="d-flex justify-content-center">
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedType === "normale"}
            onChange={() => handleCheckboxChange("normale")}
          />{" "}
          <span className="me-5 ms-1">Normale</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedType === "nonFiltrata"}
            onChange={() => handleCheckboxChange("nonFiltrata")}
          />{" "}
          <span className="me-5 ms-1">Non filtrata</span>
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedType === "ambrata"}
            onChange={() => handleCheckboxChange("ambrata")}
          />{" "}
          <span className="me-5 ms-1">Ambrata</span>
        </div>
        <div className="mt-3">
          {selectedType === "normale" ? (
            <div className="d-flex">
              <div>
                <img src={ichnusaNormale} alt="" width={"200px"} />
              </div>
              <div>
                <h1>Icnhusa normale</h1>
              </div>
            </div>
          ) : null}
          {selectedType === "ambrata" ? (
            <div className="d-flex">
              <div>
                <img src={ichnusaAmbrata} alt="" width={"200px"} />
              </div>
              <div>
                <h1>Icnhusa ambrata</h1>
              </div>
            </div>
          ) : null}
          {selectedType === "nonFiltrata" ? (
            <div className="d-flex">
              <div>
                <img src={ichnusaNonFiltrata} alt="" width={"200px"} />
              </div>
              <div>
                <h1>Icnhusa non filtrata</h1>
              </div>
            </div>
          ) : null}
        </div>
      </>
      <Footer />
    </>
  );
};

export default Ichnusa;
