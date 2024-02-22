/* eslint-disable react/prop-types */
import React from "react";

function MangaCard({ manga }) {
  return (
    <div className="manga-card">
      <h2>{manga.title}</h2>
      <img
        src={import.meta.env.VITE_BACKEND_URL + manga.image}
        alt={manga.title}
      />
      <p>
        <strong>Auteur:</strong> {manga.author}
      </p>
      <p>
        <strong>Scénariste:</strong> {manga.script_writer},
      </p>
    </div>
  );
}

export default MangaCard;
