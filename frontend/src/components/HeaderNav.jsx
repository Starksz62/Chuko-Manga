import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import "./HeaderNav.css";

// const url = "http://localhost:3310/api/mangas";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  // // const [searchResults, setSearchResults] = useState([]);

  // const handleSearch = () => {
  //   axios
  //     .get(url)
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // window.location.href = `/explorer/${searchQuery}`; */ url a définir */
    }
  };

  return (
    <div className="navbar-header">
      <header className="Navbar-top">
        <div className="searchbar-container">
          <div>
            <div className="menu-triangle">
              <button className="menu-button" type="button">
                Menu
              </button>
              <div className="icone-triangle" />
            </div>
            <ul className="scroll-menu">
              {/* <Link to={`/explorer/`}> */}
              <li className="Explorer">Explorer</li>
              {/* </Link> */}
              {/* <Link to={`/Catalogue/`}> */}
              <li className="Catalogue">Catalogue</li>
              {/* </Link> */}
            </ul>
          </div>
          <div className="line" />
          <div className="icone-loupe" />
          <input
            type="text"
            placeholder="Recherche"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="on"
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="buttonHeader-container">
          <button className="incription-login-button" type="button">
            S'incrire | Se connecter
          </button>
          <button className="vendre-button" type="button">
            Vends tes Mangas
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderNav;
