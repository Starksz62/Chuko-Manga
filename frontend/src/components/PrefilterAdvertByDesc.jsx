import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByDesc.css";

function FilteredadvertsCard({ titlefromAnnounceDetail }) {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  // const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const defaultTitle = "Explorer les derniers tomes ajoutés :";
  const titleToShow = titlefromAnnounceDetail || defaultTitle;
  // const handleFavoriteClick = (advertId) => {
  //   if (favoriteAdverts.includes(advertId)) {
  //     setFavoriteAdverts(favoriteAdverts.filter((id) => id !== advertId));
  //   } else {
  //     setFavoriteAdverts([...favoriteAdverts, advertId]);
  //   }
  // };
  useEffect(() => {
    fetch("http://localhost:3310/api/unique-adverts-date-desc")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP, statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAdverts(data);
        setFilteredAdverts(data);
        console.info(data);
        console.info(data.map((advert) => advert.id));
        // Initialisation avec tous les adverts
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });
  }, []);

  return (
    <div className="prefilter-section">
      <h2>{titleToShow}</h2>
      <div className="FilterByDate">
        <div className="filteredAdverts">
          {filteredAdverts.length > 0 ? (
            filteredAdverts
              .slice(0, 3)
              .map((advert) => <AdvertCard key={advert.id} advert={advert} />)
          ) : (
            <p>Chargement en cours...</p>
          )}
        </div>
        <Link to="/explore">
          <button type="button" className="bntSeeAllTomes">
            <div className="textBtn">
              {" "}
              Voir tous <br /> les tomes
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
FilteredadvertsCard.propTypes = {
  titlefromAnnounceDetail: PropTypes.string.isRequired,
};
export default FilteredadvertsCard;
