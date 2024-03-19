import { Link } from "react-router-dom";
import "./RepalledeSale.css";
import plusbutton from "../../assets/plusbutton.svg";

function RepalledeSale() {
  return (
    <div className="repalledeContainer">
      <p className="repalledeText">C'est le moment de vendre</p>
      <Link to="/new-advert" type="button" className="repalledeBoutton">
        <div className="repalledecontenu">
          <img src={plusbutton} alt="plusbutton" className="repalledeImg" />
          <p>Déposer une annonce</p>
        </div>
      </Link>
    </div>
  );
}

export default RepalledeSale;
