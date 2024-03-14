import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNav.css";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);
  const navigate = useNavigate();

  const { auth, setAuth } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
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
    if (searchQuery.trim() !== "") {
      fetchData();
    } else {
      setQueryResult([]);
    }
  }, [searchQuery]);

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestion = async (selectedManga) => {
    // Here you can use the selectedManga to perform any action you want
    console.info("Selected Manga:", selectedManga);
    navigate(`/explore/${selectedManga.title}`, { replace: true });
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
            <div
              role="button"
              key={manga.id}
              tabIndex="0"
              className="search-result"
              onClick={() => handleSuggestion(manga)}
              onKeyPress={handleKeyPress}
            >
              <p>{manga.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="buttonHeader-container">
        {auth == null ? (
          <button
            className="incription-login-button"
            type="button"
            onClick={handleClickOpen}
          >
            S'incrire | Se connecter
          </button>
        ) : (
          <button
            className="incription-login-button"
            type="button"
            onClick={() => {
              setAuth(null);
            }}
          >
            Se déconnecter
          </button>
        )}
        {open && <ConnexionModal handleClickOpen={handleClickOpen} />}
        <button className="vendre-button" type="button">
          Vends tes Mangas
        </button>
        <Link to="/new-advert">
          <button className="vendre-button" type="button">
            Vends tes Mangas
          </button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderNav;
