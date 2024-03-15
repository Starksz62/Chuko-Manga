import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import ProfileIcon from "../assets/profile.png";
import AdsIcon from "../assets/ads.png";
import FavoritesIcon from "../assets/favorites.png";
import SettingsIcon from "../assets/settings.png";
import SortIcon from "../assets/sort.png";
import FilterIcon from "../assets/filter.png";
import NotificationBell from "../assets/notificationBell.png";

import NotificationCenter from "./NotificationCenter";

import "./LeftNavbar.css";

function LeftNavbar() {
  const [setIsMenuOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [notificationCenterVisible, setNotificationCenterVisible] =
    useState(false);
  const [notifications, setNotifications] = useState([]);

  // Étend la sidebar lors du survol

  // const toggleFilters = () => {
  //   setShowFilters(!showFilters);
  //   if (!showFilters) {
  //     setIsMenuOpen(true);
  //   }
  // };

  const toggleFilters = () => {
    const newShowFilters = !showFilters;
    setShowFilters(newShowFilters);

    if (newShowFilters) {
      setIsMenuOpen(true);
    }
  };

  const handleFilterSelection = (filter) => {
    setCurrentFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };

  const genreOptions = [
    "Shonen",
    "Shojo",
    "Seinen",
    "Josei",
    "Kodomo",
    "Isekai",
  ];

  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
      <div className="icon-container">
        <ul>
          <li>
            <img src={ProfileIcon} alt="Profile" />
            <span>Profile</span>
          </li>
          <li>
            <img src={AdsIcon} alt="Mes annonces" />
            <span>Mes annonces</span>
          </li>
          <li>
            <img src={FavoritesIcon} alt="Favoris" />
            <span>
              <a href="/favorites">Favoris</a>
            </span>
          </li>
          <li>
            <img src={SettingsIcon} alt="Paramètres" />
            <span>Paramètres</span>
          </li>
          <li>
            <img src={SortIcon} alt="Tri" />
            <span>Tri</span>
          </li>
          <li className="notification-li">
            <div
              className="notification-icon-wrapper"
              role="button"
              tabIndex={0}
              onClick={() =>
                setNotificationCenterVisible(!notificationCenterVisible)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setNotificationCenterVisible(!notificationCenterVisible);
                }
              }}
            >
              <img
                src={NotificationBell}
                alt="Notification"
                className="notification-bell"
              />
              {notifications.length > 0 && (
                <span className="notification-count">
                  {notifications.length}
                </span>
              )}
              <span>Notifications</span>
            </div>
            {notificationCenterVisible && (
              <NotificationCenter
                setIsVisible={setNotificationCenterVisible}
                notifications={notifications}
                setNotifications={setNotifications}
              />
            )}
          </li>

          <button
            type="button"
            onClick={toggleFilters}
            className="filter-category"
          >
            <img src={FilterIcon} alt="Filtre" />
            <span className="filter-text">Filtre</span>
          </button>
          {showFilters && (
            <div className="filter-dropdown">
              <ul>
                <li>
                  <button
                    type="button"
                    className={`genres ${
                      currentFilter === "Genres" ? "active" : ""
                    }`}
                    onClick={() => handleFilterSelection("Genres")}
                  >
                    Genres
                  </button>
                  {currentFilter === "Genres" && (
                    <ul>
                      {genreOptions.map((genre) => (
                        <button
                          type="button"
                          key={genre}
                          onClick={() => handleFilterSelection(genre)}
                        >
                          {genre}
                        </button>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    className="condition"
                    onClick={() => handleFilterSelection("Etat")}
                  >
                    Etat
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="price"
                    onClick={() => handleFilterSelection("Prix")}
                  >
                    Prix
                  </button>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LeftNavbar;
