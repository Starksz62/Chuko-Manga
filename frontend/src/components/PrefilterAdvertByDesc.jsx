import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByDesc.css";

function PrefilterAdvertByDesc({ titlefromAnnounceDetail }) {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const navigate = useNavigate();
  const defaultTitle = "Explorer les derniers tomes ajoutés :";
  const titleToShow = titlefromAnnounceDetail || defaultTitle;
  const containerRef = useRef(null);

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
        setFilteredAdverts(data); // Initialisation avec tous les adverts
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });

    // Gestion du défilement à la molette de la souris
    const handleMouseWheel = (e) => {
      containerRef.current.scrollLeft += e.deltaY;
      e.preventDefault();
    };

    // Ajout de l'écouteur d'événements pour la molette de la souris
    containerRef.current.addEventListener("wheel", handleMouseWheel);

    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      if (containerRef.current) {
        // Vérifie si containerRef.current est différent de null
        containerRef.current.removeEventListener("wheel", handleMouseWheel);
      }
    };
  }, []);

  const handleViewAllClick = () => {
    navigate("/explore?batch=false");
  };

  return (
    <div className="prefilter-section">
      <h1>{titleToShow}</h1>
      <div className="FilterByDateDescWrapper">
        <div className="FilterByDateDesc" ref={containerRef}>
          <div className="filteredAdverts">
            {filteredAdverts.length > 0 ? (
              filteredAdverts.map((advert) => (
                <div key={advert.id} className="AdvertCard">
                  <AdvertCard advert={advert} />
                </div>
              ))
            ) : (
              <p>Chargement en cours...</p>
            )}
          </div>
        </div>
        <div className="seeAllTomesButtonWrapper">
          <button
            type="button"
            className="bntSeeAllTomes"
            onClick={handleViewAllClick}
          >
            <div className="textBtn">
              Voir tous <br /> les tomes
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrefilterAdvertByDesc;

PrefilterAdvertByDesc.propTypes = {
  titlefromAnnounceDetail: PropTypes.string.isRequired,
};
