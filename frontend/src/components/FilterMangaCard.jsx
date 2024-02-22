import React, { useState, useEffect } from "react";
import MangaCard from "./MangaCard";

function FilteredMangasCard() {
  const [, setMangas] = useState([]);
  const [filteredMangas, setFilteredMangas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/mangas")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP, statut : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMangas(data);
        setFilteredMangas(data); // Initialisation avec tous les mangas
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      });
  }, []);

  // Tri par ordre alphabétique
  const handleSortByTitle = () => {
    const sortedMangas = [...filteredMangas].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setFilteredMangas(sortedMangas);
  };

  return (
    <div className="App">
      <h1>Liste des mangas</h1>
      <button type="button" onClick={handleSortByTitle}>
        Trier par titre
      </button>
      {filteredMangas.length > 0 ? (
        filteredMangas.map(
          (
            manga // Correction ici : changer mangas en manga
          ) => <MangaCard key={manga.id} manga={manga} />
        )
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default FilteredMangasCard;
