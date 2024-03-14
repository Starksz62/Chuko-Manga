import React, { useState, useEffect } from "react";
import AdvertCard from "../components/AdvertCard";
import "./Favorites.css";

function Favorites() {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteAdverts");
    if (storedFavorites) {
      setFavoriteAdverts(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <>
      <h1>Article Favoris</h1> {/* Déplacez le h1 à l'extérieur de la div */}
      <div className="favorite-adverts-container">
        {" "}
        {/* Ajoutez le className ici */}
        {favoriteAdverts.map((advert) => (
          <AdvertCard
            key={advert.id}
            advert={advert}
            favoriteAdverts={favoriteAdverts}
            setFavoriteAdverts={setFavoriteAdverts}
          />
        ))}
      </div>
    </>
  );
}

export default Favorites;
