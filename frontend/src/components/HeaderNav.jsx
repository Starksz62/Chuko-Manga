import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InscriptionModal from "./InscriptionModal";

import "../style/HeaderNav.css";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = () => {
  //   axios
  //     .get("http://localhost:3310/api/mangas")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.results) {
  //         setSearchResults(response.results);
  //         console.info("Search Results:", response.results);
  //       } else {
  //         setSearchResults([]);
  //         console.error("No results found.");
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   const delaySearch = setTimeout(() => {
  //     handleSearch();
  //   }, 100);
  //   return () => clearTimeout(delaySearch);
  // }, [searchQuery]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleButtonClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleKeyPress = async (e) => {
    // contrsuire le lien /explore/'${searchQuery}', et faire un redirection (use navigate) vers ce lien
    if (e.key === "Enter") {
      const searchUrl = `http://localhost:3310/api/explore/${searchQuery}`;
      try {
        await axios.get(searchUrl);
      } catch (error) {
        console.error("Error while posting search query:", error);
      }
      navigate(`/explore/${searchQuery}`, { replace: true });
    }
  };
  return (
    <header className="navbar-header">
      <div className="searchbar-container">
        <div>
          <div className="menu-triangle">
            <button className="menu-button" type="button">
              Menu
            </button>
            <div className="icone-triangle" />
          </div>
          <ul className="scroll-menu">
            <Link to="/explore">
              <li className="Explorer">Explorer</li>
            </Link>
            <li className="Catalogue">Catalogue</li>
          </ul>
        </div>
        <div className="icone-loupe" />
        <input
          className="searchbar"
          type="text"
          placeholder="Recherche"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="on"
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="buttonHeader-container">
        <button
          className="incription-login-button"
          type="button"
          onClick={handleButtonClick}
        >
          S'incrire | Se connecter
        </button>
        <button className="vendre-button" type="button">
          Vends tes Mangas
        </button>
      </div>
      {isModalOpen && (
        <InscriptionModal onClose={() => setIsModalOpen(false)} />
      )}
    </header>
  );
}

export default HeaderNav;
