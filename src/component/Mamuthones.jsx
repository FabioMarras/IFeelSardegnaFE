import Footer from "./Footer";
import NavBar from "./NavBar";
import foto1 from "../Mamoiada-copertina.jpg";
import foto2 from "../mamuthone2.jpg";

const Mamuthones = () => {
  return (
    <>
      <NavBar />
      <div className="mx-2">
        <h1>Mamuthones</h1>
        <h4 className="my-2">UNA TRADIZIONE. UNA MASCHERA.</h4>
        <div className="d-flex justify-content-between align-items-center">
          <div className="mx-4">
            <ul className="list-unstyled">
              <li>
                Una maschera scura, solitamente nera, con due corna rivolte verso l'alto, simili a quelle di un animale.
                Una pesante veste nera come abbigliamento, scarpe di cuoio nero, e spesso un campanaccio al collo.
              </li>
              <li className="mt-4">
                La loro esibizione prevede un passo lento e misurato, scandito dal suono del campanaccio.
              </li>
            </ul>
          </div>
          <img src={foto1} alt="" width={"60%"} className="imgMam" />
        </div>
        <div className="d-flex justify-content-between align-items-center ">
          <img src={foto2} alt="" width={"40%"} className="imgMam2" />
          <div className="mx-4">
            <ul className="list-unstyled">
              <li>
                Una tradizione antica di secoli, con radici nelle credenze pagane e agrarie. I Mamuthones rappresentano
                simbolicamente l'antica lotta contro le forze del male e la celebrazione della comunità.
              </li>
              <li className="mt-4">
                Mamoiada è la località principale dove si svolgono le celebrazioni dei Mamuthones, attirando visitatori
                da tutta la Sardegna e oltre. La manifestazione è parte integrante del carnevale sardo e contribuisce a
                preservare e celebrare la ricca eredità culturale dell'isola.
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Mamuthones;
