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
            <h1> Explorez nos annonces </h1>
            <Link to="/explore">
              <button className="vendre-button" type="button">
                Explorer
              </button>
            </Link>
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
