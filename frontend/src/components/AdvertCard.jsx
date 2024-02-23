/* eslint-disable react/prop-types */
import React from "react";

function AdvertCard({ advert }) {
  // Vérifier si advert est défini avant d'accéder à ses propriétés
  return (
    <div className="manga-card">
      <h2>{advert.price}€</h2>
      <p>
        <strong>Description :</strong> {advert.description}
      </p>
      <p>
        <strong>titre annonce :</strong> {advert.title_search_manga},
      </p>
    </div>
  );
}

export default AdvertCard;
