import "./Home.css";
import { Link } from "react-router-dom";
import PrefilterAdvertByDesc from "../components/PrefilterAdvertByDesc";
import PrefilterAdvertByBatch from "../components/PrefilterAdvertByBatch";
import RepalledeSale from "../components/RepalledeSale/RepalledeSale";

function Home() {
  return (
    <div className="main">
      <div className="hero-section">
        <div className="hero-banner">
          <img src="src/assets/hero_banner.png" alt="" />
          <div className="hero-card">
            <h1> Des tomes que tu ne lis plus ? </h1>
            <Link to="/new-advert">
              <button className="vendre-button" type="button">
                Vends tes Mangas
              </button>
            </Link>
            <a href="https://www.wikihow.com/Main-Page">
              Découvrir comment ça marche
            </a>
          </div>
        </div>
      </div>
      <PrefilterAdvertByDesc />
      <RepalledeSale />
      <PrefilterAdvertByBatch />
    </div>
  );
}

export default Home;
