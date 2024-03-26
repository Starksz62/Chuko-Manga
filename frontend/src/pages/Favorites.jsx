import React, { useState, useEffect } from "react";
import AdvertCard from "../components/AdvertCard";
import { useNotifications } from "../context/NotificationContext";
import "./Favorites.css";

function Favorites() {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);
  const { addNotification } = useNotifications();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteAdverts");
    if (storedFavorites) {
      setFavoriteAdverts(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <>
      <h1>Article Favoris</h1>
      <div className="favorite-adverts-container">
        {favoriteAdverts.map((advert) => (
          <AdvertCard
            key={advert.id}
            advert={advert}
            favoriteAdverts={favoriteAdverts}
            setFavoriteAdverts={setFavoriteAdverts}
            addNotification={addNotification}
          />
        ))}
      </div>
    </>
  );
}

export default Favorites;
