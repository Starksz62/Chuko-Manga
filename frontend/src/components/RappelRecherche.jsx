import { useEffect, useState } from "react";
import "./RappelRecherche.css";
import SearchBar from "./SearchBar";

function RappelRecherche() {
  const [mangas, setMangas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/manga/catalog")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMangas(data);
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  return (
    <section className="rappel-recherche-container">
      <h3 className="title-rappel-recherche">
        Recherche le tome qu'il te manque :
      </h3>
      <SearchBar />
      <h3 className="title-rappel-recherche">Suggestions de recherche :</h3>
      {/* Faire un axios pour récupérer des noms de mangas du catalogue */}
      <ul className="list-suggestion">
        {mangas.map((manga) => (
          <li key={manga.id} className="sugg">
            {manga.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RappelRecherche;
