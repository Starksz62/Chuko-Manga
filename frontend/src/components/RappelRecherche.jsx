import "./RappelRecherche.css";
import SearchBar from "./SearchBar";

function RappelRecherche() {
  return (
    <section className="rappel-recherche-container">
      <h3 className="title-rappel-recherche">
        Recherche le tome qu'il te manque :
      </h3>
      <SearchBar />
      <br />
      <br />
      <h3 className="title-rappel-recherche">Suggestions de recherche :</h3>
      {/* Faire un axios pour récupérer des noms de mangas du catalogue */}
      <ul className="list-suggestion">
        <li className="sugg">One piece</li>
        <li className="sugg">Naruto</li>
        <li className="sugg">Hajime no Ippo</li>
        <li className="sugg">Shangri-la Frontier</li>
        <li className="sugg">Berserk</li>
        <li className="sugg">Blue lock</li>
        <li className="sugg">Chi</li>
      </ul>
    </section>
  );
}

export default RappelRecherche;
