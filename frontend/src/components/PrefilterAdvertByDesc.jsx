import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByDesc.css";

function FilteredadvertsCard({ titlefromAnnounceDetail }) {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const navigate = useNavigate();
  const defaultTitle = "Explorer les derniers tomes ajoutés :";
  const titleToShow = titlefromAnnounceDetail || defaultTitle;

  useEffect(() => {
    fetch("http://localhost:3310/api/find-recent-adverts?batch=false")
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

  const handleViewAllClick = () => {
    navigate("/explore?batch=false");
  };

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

        <button
          onClick={handleViewAllClick}
          type="button"
          className="bntSeeAllTomes"
        >
          <div className="textBtn">
            {" "}
            Voir tous <br /> les tomes
          </div>
        </button>
      </div>
    </div>
  );
}
FilteredadvertsCard.propTypes = {
  titlefromAnnounceDetail: PropTypes.string.isRequired,
};
export default FilteredadvertsCard;
