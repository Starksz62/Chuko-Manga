/* eslint-disable react/prop-types */
import React from "react";

function MangaCard({ mangas }) {
  return (
    <div className="manga-card">
      <h2>{mangas.title}</h2>
      <img
        src={import.meta.env.VITE_BACKEND_URL + mangas.image}
        alt={mangas.title}
      />
      <p>
        <strong>Auteur:</strong> {mangas.author}
      </p>
      <p>
        <strong>Scénariste:</strong> {mangas.script_writer},
      </p>
    </div>
  );
}

export default MangaCard;
