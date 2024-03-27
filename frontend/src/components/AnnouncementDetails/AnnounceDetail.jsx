import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import Stars from "./StarsRating";
import FilteredadvertsCard from "../PrefilterAdvertByDesc";
import "./AnnounceDetail.css";
import AdvertCard from "../AdvertCard";

function AnnouncementDetail({ userId, id }) {
  const [userSells, setUserSells] = useState([]);
  console.info("verif data", userSells);
  const [sellerInfo, setSellerInfo] = useState({
    pseudo: "",
    user_picture: "",
    average: "",
    feedback_nber: "",
  });

  console.info("userSells", userSells);
  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts-byseller/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const transformedData = data.map((advert) => ({
          ...advert,
          id: advert.advert_id, // Renommez advert_id en id
        }));
        setSellerInfo({
          pseudo: data[0].pseudo,
          user_picture: data[0].user_picture,
          average: data[0].average,
          feedback_nber: data[0].feedback_nber,
        });

        setUserSells(transformedData);
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
        {userSells.map((userSell) => (
          <AdvertCard key={userSell.id} advert={userSell} />
        ))}
      </div>
      <div>
        <FilteredadvertsCard
          titlefromAnnounceDetail="Ces annonces peuvent vous intéresser :"
          titleClassName="specific-title-class"
          useDivWrapper
        />
      </div>
    </>
  );
}
AnnouncementDetail.propTypes = {
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default AnnouncementDetail;
