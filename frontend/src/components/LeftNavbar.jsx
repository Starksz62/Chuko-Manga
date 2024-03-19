import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNotifications } from "../context/NotificationContext";

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
import UserContext from "../context/UserContext";

function LeftNavbar() {
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [notificationCenterVisible, setNotificationCenterVisible] =
    useState(false);

  const { auth } = useContext(UserContext);
  const { notifications } = useNotifications();

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
    <>
      {notificationCenterVisible && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
          className="backdrop"
          onClick={() => setNotificationCenterVisible(false)}
        />
      )}
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
            {auth && (
              <li className="notification-li">
                <div
                  className="notification-icon-wrapper"
                  onClick={() =>
                    setNotificationCenterVisible(!notificationCenterVisible)
                  }
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) =>
                    e.key === "Enter" &&
                    setNotificationCenterVisible(!notificationCenterVisible)
                  }
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
                  />
                )}
              </li>
            )}

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
    </>
  );
}

export default LeftNavbar;
