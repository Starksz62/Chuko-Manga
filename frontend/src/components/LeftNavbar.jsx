import { useState } from "react";

import logo from "../assets/logo.png";
import logoReduced from "../assets/navBar.png";
import ProfileIcon from "../assets/profile.png";
import AdsIcon from "../assets/ads.png";
import FavoritesIcon from "../assets/favorites.png";
import SettingsIcon from "../assets/settings.png";
import SortIcon from "../assets/sort.png";
import FilterIcon from "../assets/filter.png";

import "./LeftNavbar.css";

function LeftNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Étend la sidebar lors du survol
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  // Réduit la sidebar lorsque la souris quitte la zone
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`sidebar ${isMenuOpen ? "" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-logo">
        {isMenuOpen ? (
          <img src={logo} alt="Logo" />
        ) : (
          <img src={logoReduced} alt="Logo Réduit" />
        )}
      </div>
      <div className="icon-container">
        <ul>
          <li>
            <img src={ProfileIcon} alt="Profile" />
            <span>{isMenuOpen && "Profile"}</span>
          </li>
          <li>
            <img src={AdsIcon} alt="Mes annonces" />
            <span>{isMenuOpen && "Mes annonces"}</span>
          </li>
          <li>
            <img src={FavoritesIcon} alt="Favoris" />
            <span>{isMenuOpen && "Favoris"}</span>
          </li>
          <li>
            <img src={SettingsIcon} alt="Paramètres" />
            <span>{isMenuOpen && "Paramètres"}</span>
          </li>
          <li>
            <img src={SortIcon} alt="Tri" />
            <span>{isMenuOpen && "Tri"}</span>
          </li>
          <li>
            <img src={FilterIcon} alt="Filtre" />
            <span>{isMenuOpen && "Filtre"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
