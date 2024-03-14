import "./Home.css";
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
            <button className="vendre-button" type="button">
              Vends tes Mangas
            </button>
            <a href="https://www.wikihow.com/Main-Page">
              Découvrir comment ça marche
            </a>
          </div>
        </div>
      </div>
      <PrefilterAdvertByDesc />
      <PrefilterAdvertByBatch />
      <RepalledeSale />
    </div>
  );
}

export default Home;
