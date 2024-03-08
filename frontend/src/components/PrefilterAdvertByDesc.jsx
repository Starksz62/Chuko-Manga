import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByDesc.css";

function FilteredadvertsCard() {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);

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
        setFilteredAdverts(data); // Initialisation avec tous les adverts
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
      <h2>Explorer les derniers tomes ajoutés :</h2>
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

export default FilteredadvertsCard;
