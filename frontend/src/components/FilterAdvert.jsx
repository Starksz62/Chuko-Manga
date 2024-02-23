import React, { useState, useEffect } from "react";
import AdvertCard from "./AdvertCard";

function FilteredadvertsCard() {
  const [, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/display-adverts")
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

  // Fonction pour trier les annonces par ordre croissant de prix
  const sortByPriceAscending = () => {
    const sortedAdverts = [...filteredAdverts].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setFilteredAdverts(sortedAdverts);
  };

  return (
    <div className="App">
      <h1>Liste des adverts</h1>
      <button type="button" onClick={sortByPriceAscending}>
        Trier par prix croissant
      </button>
      {filteredAdverts.length > 0 ? (
        filteredAdverts.map((advert) => (
          <AdvertCard key={advert.id} advert={advert} />
        ))
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default FilteredadvertsCard;
