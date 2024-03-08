import { Link } from "react-router-dom";
import "./RepalledeSale.css";
import plusbutton from "../../assets/plusbutton.svg";

function RepalledeSale() {
  return (
    <div className="repalledeContainer">
      <p className="repalledeText">C'est le moment de vendre</p>
      <Link to="newannonce" type="button" className="repalledeBoutton">
        <div className="repalledecontenu">
          <img src={plusbutton} alt="plusbutton" className="repalledeImg" />
          Déposer une annonce
        </div>
      </Link>
    </div>
  );
}

export default RepalledeSale;
