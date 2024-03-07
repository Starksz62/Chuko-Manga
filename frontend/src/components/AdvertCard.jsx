/* eslint-disable react/prop-types */
import "./AdvertCard.css";
import { Link, useNavigate } from "react-router-dom";
import Favorite from "../assets/heartFull.png";
import Star from "../assets/star.png";

function AdvertCard({ advert }) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/display-adverts/${advert.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className="card-content">
      <Link to={`/display-adverts/${advert.id}`} onClick={handleCardClick}>
        <img
          src={advert.image_path}
          alt={advert.title}
          className="card-image"
        />
        <h2 className="card-title">{advert.title_search_manga}</h2>
      </Link>
      <div className="card-price-section">
        <p className="card-price">{advert.price}€</p>
        <img src={Favorite} alt="logo favorite" className="card-favorite" />
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
          <img src={Star} alt="logo star" className="card-star" />
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

export default AdvertCard;
