/* eslint-disable jsx-a11y/anchor-is-valid */
import banner from "../assets/banniereAbdou.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} alt=" banner manga" className="image-banner" />
      <div className="banner-content">
        <h1 className="name-banner">
          Des tomes
          <br />
          que tu ne lis <br /> plus ?
        </h1>
        <button type="button" className="sell-button">
          <p className="redirection-sell">Vends tes Mangas</p>
        </button>
        <a href="#" className="redirection-text">
          Découvrir comment ça marche
        </a>
      </div>
    </div>
  );
}
export default Banner;
