import React, { useEffect, useState } from "react";

import axios from "axios";

import "./MangaDetails.css";
import dragonBallImage from "../../../backend/public/assets/dragonBall.png";

function MangaDetails() {
  const [manga, setManga] = useState({});
  // const [genre, setGenre] = useState("");
  // const [publishingHouse, setPublishingHouse] = useState("");
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
  if (!manga) return <div>Aucun détail trouvé</div>;

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
            <strong>Sortie en France :</strong> {formatDate(manga.date_france)}
          </p>
          <p>
            <strong>Sortie au Japon :</strong> {formatDate(manga.date_japan)}
          </p>
          <p>
            <strong>Genre</strong>
            {manga.genre}
          </p>
          <p>
            <strong>Japon</strong>{" "}
            {manga.finish_japan ? "Terminée" : "Pas terminée"}
          </p>
          <p>
            <strong>France </strong>
            {manga.finish_france ? "Terminée" : "Pas terminée"}
          </p>
        </div>

        <div className="authors-container">
          <h2 className="title-authors">Authors</h2>
          <div className="data-authors">
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
