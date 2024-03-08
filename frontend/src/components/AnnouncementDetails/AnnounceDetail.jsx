import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "./StarsRating";
import FilteredadvertsCard from "../PrefilterAdvertByDesc";
import "./AnnounceDetail.css";

function AnnouncementDetail({ userId, id }) {
  const [userSells, setUserSells] = useState(null);
  const [sellerInfo, setSellerInfo] = useState({
    pseudo: "",
    user_picture: "",
    average: "",
    feedback_nber: "",
  });
  const handleCardClick = () => {
    window.scrollTo(0, 0);
  };
  console.info("sellerInfo", sellerInfo);
  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts-byseller/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.info("verif data", data);
        setSellerInfo({
          pseudo: data[0].pseudo,
          user_picture: data[0].user_picture,
          average: data[0].average,
          feedback_nber: data[0].feedback_nber,
        });

        setUserSells(data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails de l'annonce",
          error
        );
      });
  }, [userId]);

  if (!userSells) {
    return (
      <p>Cet utilisateur n'a pas d'autres mangas en ventes pour le moment</p>
    );
  }

  const filteredSells = userSells.filter(
    (sell) => sell.advert_id.toString() !== id
  );
  const articlesCount = filteredSells.length;

  return (
    <>
      <div className="number-article">
        <p>
          ({articlesCount}) article{articlesCount > 1 ? "s" : ""} disponible
          {articlesCount > 1 ? "s" : ""} pour ce vendeur
        </p>
        <div className="seller-information">
          <img src={sellerInfo.user_picture} alt="" />
          <div className="information-from-card">
            <p>{sellerInfo.pseudo}</p>
            <div className="feedback-stars">
              <p>{sellerInfo.feedback_nber}</p>
              <Stars ratingValue={parseFloat(sellerInfo.average)} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-other-sell">
        {filteredSells.map((sell) => (
          <div className="image-other-sell" key={sell.advert_id}>
            <Link
              to={`/display-adverts/${sell.advert_id}`}
              onClick={handleCardClick}
            >
              <img className="image-other-sell" src={sell.image_path} alt="" />
            </Link>
            <h2>{sell.title_search_manga}</h2>
            <p className="price-other-sell">{sell.price} €</p>
            <p className="condition-other-sell">{sell.name_condition}</p>
          </div>
        ))}
      </div>
      <div>
        <FilteredadvertsCard titlefromAnnounceDetail="Ces annonces peuvent vous intéresser :" />
      </div>
    </>
  );
}
AnnouncementDetail.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default AnnouncementDetail;
