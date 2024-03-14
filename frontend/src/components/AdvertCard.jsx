import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./AdvertCard.css";
import { Link, useNavigate } from "react-router-dom";

function AdvertCard({ advert }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteAdverts");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      const isFavorited =
        favorites.findIndex((favAdvert) => favAdvert.id === advert.id) !== -1;
      setIsFavorite(isFavorited);
    }
  }, [advert.id]);

  const handleCardClick = () => {
    navigate(`/display-adverts/${advert.id}`);
    window.scrollTo(0, 0);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    const storedFavorites = localStorage.getItem("favoriteAdverts");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      const updatedFavorites = isFavorite
        ? favorites.filter((favAdvert) => favAdvert.id !== advert.id)
        : [...favorites, advert];
      localStorage.setItem("favoriteAdverts", JSON.stringify(updatedFavorites));
    } else {
      localStorage.setItem("favoriteAdverts", JSON.stringify([advert]));
    }
  };

  return (
    <section className="card-content">
      <Link to={`/display-adverts/${advert.id}`} onClick={handleCardClick}>
        <img
          src={advert.image_path}
          alt={advert.title_search_manga}
          className="card-image"
        />
        <h2 className="card-title">{advert.title_search_manga}</h2>
      </Link>
      <div className="card-price-section">
        <p className="card-price">{advert.price}€</p>
        <button type="button" onClick={handleFavoriteClick}>
          <img
            src={
              isFavorite
                ? "http://localhost:3310/static/heartFull.png"
                : "http://localhost:3310/static/heart.png"
            }
            alt="logo favorite"
            className="card-favorite"
          />
        </button>
      </div>
      <p className="card-condition">{advert.name_condition}</p>
      <div className="card-user-section">
        <div className="user">
          <img
            src={advert.user_picture}
            alt="user"
            className="card-user-photo"
          />
          <p className="card-user-name">{advert.pseudo}</p>
        </div>
        <div className="note">
          <img
            src="http://localhost:3310/static/star.png"
            alt="logo star"
            className="card-star"
          />
          <div className="note-text">
            <p className="card-evaluation">
              {advert.average}
              <span className="card-number-feedback">
                ({advert.feedback_nber})
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

AdvertCard.propTypes = {
  advert: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title_search_manga: PropTypes.string.isRequired,
    image_path: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name_condition: PropTypes.string.isRequired,
    user_picture: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
    feedback_nber: PropTypes.number.isRequired,
  }).isRequired,
};

export default AdvertCard;
