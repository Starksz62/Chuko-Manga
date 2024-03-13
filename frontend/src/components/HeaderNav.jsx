import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../context/UserContext";

import ConnexionModal from "./ConnexionModal";

import "./HeaderNav.css";

function HeaderNav() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
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
        {/* <div>
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
        <div className="icone-loupe" /> */}
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
        {user == null ? (
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
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        )}
        {open && <ConnexionModal handleClickOpen={handleClickOpen} />}
        <button className="vendre-button" type="button">
          Vends tes Mangas
        </button>
      </div>
    </header>
  );
}

export default HeaderNav;
