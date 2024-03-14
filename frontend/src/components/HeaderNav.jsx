import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./HeaderNav.css";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
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

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3310/api/mangas?q=${searchQuery}`
        );
        setQueryResult(response.data);
        console.info("Response from backend:", response.data);
      } catch (err) {
        console.error("Error while fetching search results:", err);
      }
    };

    // Only make the request if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchData();
    } else {
      // Clear query result if searchQuery is empty
      setQueryResult([]);
    }
  }, [searchQuery]);

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
        <input
          className="searchbar"
          type="text"
          placeholder="Recherche"
          value={searchQuery}
          onChange={handleQueryChange}
          autoComplete="on"
          onKeyPress={handleKeyPress}
        />
        <div className="result-tab">
          {queryResult.map((manga) => (
            <div key={manga.id} className="search-result">
              <p>{manga.title}</p>
            </div>
          ))}
        </div>
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
  );
}

export default HeaderNav;
