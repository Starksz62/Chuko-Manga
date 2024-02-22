/* eslint-disable react/prop-types */
import React from "react";

function MangaCard({ advert }) {
  return (
    <div className="manga-card">
      <h2>{advert.title}</h2>
      <img
        src={import.meta.env.VITE_BACKEND_URL + advert.image}
        alt={advert.title}
      />
      <p>
        <strong>Auteur:</strong> {advert.author}
      </p>
      <p>
        <strong>Scénariste:</strong> {advert.script_writer},
      </p>
    </div>
  );
}

export default MangaCard;
