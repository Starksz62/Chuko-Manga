import "./Home.css";
import { Link } from "react-router-dom";
import PrefilterAdvertByDesc from "../components/PrefilterAdvertByDesc";
import PrefilterAdvertByBatch from "../components/PrefilterAdvertByBatch";
import RepalledeSale from "../components/RepalledeSale/RepalledeSale";
import RappelRecherche from "../components/RappelRecherche";
import CoupDeCoeur from "../components/CoupDeCoeur";

function Home() {
  return (
    <div className="main">
      <div className="home-banner-section">
        <div className="home-banner-content">
          <h1>Des tomes que tu ne lis plus ?</h1>
          <Link to="/explore">
            <button className="vendre-button" type="button">
              Vends tes mangas
            </button>
          </Link>
          <p>Découvrir comment ça marche</p>
        </div>
      </div>
      <PrefilterAdvertByDesc />
      <RepalledeSale />
      <PrefilterAdvertByBatch />
      <RappelRecherche />
      <CoupDeCoeur />
    </div>
  );
}

export default Home;
