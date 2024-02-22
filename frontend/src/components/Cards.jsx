/* eslint-disable react/prop-types */
import "./Cards.css";
// import Naruto from "../assets/NarutoTome13.jpg";
// import Favorite from "../assets/heart.png";
// import Orange from "../assets/orange.jpg";

function Cards({ data }) {
  return (
    <section className="card-content">
      <img src={data.image} alt={data.title} className="card-image" />
      <h2 className="card-title">{data.title}</h2>
      <div className="card-price-section">
        <p className="card-price">{data.price}€</p>
        <img
          src={data.favorite}
          alt="logo favorite"
          className="card-favorite"
        />
      </div>
      <p className="card-condition">{data.condition}</p>
      <div className="card-user-section">
        <div className="user">
          <img src={data.imageUser} alt="user" className="card-user-photo" />
          <p className="card-user-name">{data.nameUser}</p>
        </div>
        <div className="note">
          <img src={data.star} alt="logo star" className="card-star" />
          <div className="note-text">
            <p className="card-evaluation">
              {data.note}
              <span className="card-number-feedback">({data.comment})</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
