import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByBatch.css";

function FilteredadvertsCard() {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/batch-adverts-date-desc")
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

  return (
    <div className="prefilter-sectionBatch">
      <h1>Explorer les derniers lots ajoutés :</h1>
      <div className="FilterByDateBatchrapper">
        <div className="FilterByDateBatch" ref={containerRef}>
          <div className="filteredAdvertsBatch">
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
        <div className="seeAllTomesButtonWrapperBatch">
          <Link to="/explore">
            <button type="button" className="bntSeeAllTomesBatch">
              <div className="textBtnBatch">
                {" "}
                Voir tous <br /> les tomes
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilteredadvertsCard;
