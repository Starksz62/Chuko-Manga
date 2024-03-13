import { useState } from "react";
import PropTypes from "prop-types";
import "./AdvertCard.css";
import { Link, useNavigate } from "react-router-dom";

function AdvertCard({ advert }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/display-adverts/${advert.id}`);
    window.scrollTo(0, 0);
  };
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section className="card-content">
      <Link to={`/display-adverts/${advert.id}`} onClick={handleCardClick}>
        <img
          src={`http://localhost:3310${advert.image_path}`}
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
