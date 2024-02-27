import React, { useEffect, useState } from "react";

import axios from "axios";

import "./MangaDetails.css";
import dragonBallImage from "../assets/dragonBall.webp";

function MangaDetails() {
  const [manga, setManga] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/mangas/2`)
      .then((response) => {
        console.info("Réponse de l'API:", response.data);
        setManga(response.data[0]);
        setIsLoading(false);
      })
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        console.error("Erreur Axios:", error);
        setError(error.toString());
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="naruto-details">
      <div className="top-section">
        <div className="image-container">
          <img src={dragonBallImage} alt={manga.title} />
        </div>
        <div className="description-manga">
          <h2 className="title-manga">{manga.title}</h2>
          <p>{manga.description}</p>
        </div>
      </div>

      <div className="bottom-section">
        <div className="status-manga">
          <p>
            <strong>Date de sortie en France :</strong>{" "}
            {formatDate(manga.date_france)}
          </p>
          <p>
            <strong>Date de sortie au Japon :</strong>{" "}
            {formatDate(manga.date_japan)}
          </p>
        </div>

        <div className="authors-container">
          <div className="data-authors">
            <h2 className="title-authors">Authors</h2>
            <p>
              <span>Auteur :</span> {manga.author}
            </p>
            <p>
              <span>Scénariste :</span> {manga.script_writer}
            </p>
            <p>
              <span>Illustrateur :</span> {manga.illustrator}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MangaDetails;
