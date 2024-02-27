/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import "./Cards.css";
import { useState } from "react";
import heart from "../assets/heart.png";
import heartFull from "../assets/heartFull.png";

function Cards({ data }) {
  const [favorite, setFavorite] = useState(heart);

  const handleClickFavorite = () => {
    if (favorite === heart) {
      setFavorite(heartFull);
    } else {
      setFavorite(heart);
    }
  };

  return (
    <section className="card-content">
      <img src={data.image} alt={data.title} className="card-image" />
      <h2 className="card-title">{data.title}</h2>
      <div className="card-price-section">
        <p className="card-price">{data.price}€</p>
        <img
          src={favorite}
          alt="logo favorite"
          className="card-favorite"
          onClick={handleClickFavorite}
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
