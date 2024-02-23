import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import facebook from "../assets/fb.png";
import twitter from "../assets/X.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="firstBlock">
        <div>
          <p className="title">Chuko Manga</p>
          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">A propos de Chuko Manga</p>
          </a>
        </div>
        <div>
          <p className="title">Découvrir</p>

          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">Comment ça marche</p>
          </a>
          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">Tableau de bord</p>
          </a>
        </div>
        <div>
          <p className="title">Aide</p>
          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">Centre d'aide</p>
          </a>
          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">Vendre</p>
          </a>
          <a href="youtube.com" target="_blank" rel="noreferrer">
            <p className="text">Acheter</p>
          </a>
        </div>
      </div>
      <div className="socialMedia">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram-logo" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook-logo" />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
          <img src={tiktok} alt="tiktok-logo" />
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noreferrer">
          <img src={twitter} alt="X-logo" />
        </a>
      </div>
      <div className="lastBlock">
        <a href="youtube.com" target="_blank" rel="noreferrer">
          <p>Politique de confidentialité</p>
        </a>
        <a href="youtube.com" target="_blank" rel="noreferrer">
          <p>Politique de cookies</p>
        </a>
        <a href="youtube.com" target="_blank" rel="noreferrer">
          <p>Paramétre de cookies</p>
        </a>
        <a href="youtube.com" target="_blank" rel="noreferrer">
          <p>Termes et conditions</p>
        </a>
        <a href="youtube.com" target="_blank" rel="noreferrer">
          <p>Notre plateforme</p>
        </a>
      </div>
      <div className="copyright">©2024 CHUKO MANGA</div>
    </div>
  );
}
