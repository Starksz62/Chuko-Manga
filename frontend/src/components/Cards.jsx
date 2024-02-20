import "./Cards.css";
import Naruto from "../assets/NarutoTome13.jpg";
import Favorite from "../assets/heart.png";
import Orange from "../assets/orange.jpg";

function Cards() {
  return (
    <section className="card-content">
      <img src={Naruto} alt="" className="card-image" />
      <h2 className="card-title">Naruto Tome 34</h2>
      <div className="card-price-section">
        <p className="card-price">5,00€</p>
        <img src={Favorite} alt="" className="card-favorite" />
      </div>
      <p className="card-condition">Bon état</p>
      <div className="card-user-section">
        <div className="user">
          <img src={Orange} alt="" className="card-user-photo" />
          <p className="card-user-name">Utilisateur</p>
        </div>
        <div className="note">
          <img src={Orange} alt="" className="card-star" />
          <div className="note-text">
            <p className="card-evaluation">5</p>
            <p className="card-number-feedback">(24)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
