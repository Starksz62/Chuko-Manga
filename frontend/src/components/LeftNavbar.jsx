import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import ProfileIcon from "../assets/profile.png";
import AdsIcon from "../assets/ads.png";
import FavoritesIcon from "../assets/favorites.png";
import SettingsIcon from "../assets/settings.png";
import SortIcon from "../assets/sort.png";
import FilterIcon from "../assets/filter.png";
import { useFilters } from "../Context/FilterContext";
import "./LeftNavbar.css";
import PriceSlider from "./Slider";

function LeftNavbar() {
  const [showFilters, setShowFilters] = useState(false);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedConditionName, setSelectedConditionName] = useState("");
  const { updateFilters } = useFilters();
  const [showPriceSlider, setShowPriceSlider] = useState(false);

  const handleFilterSelection = (genreId) => {
    if (genreId === selectedGenreId) {
      updateFilters({ genreId: null });
      setSelectedGenreId(null);
    } else {
      updateFilters({ genreId });
      setSelectedGenreId(genreId);
    }
  };
  const handleConditionSelection = (conditionName) => {
    if (conditionName === selectedConditionName) {
      setSelectedConditionName("");
      updateFilters({ condition: "" });
    } else {
      setSelectedConditionName(conditionName);
      updateFilters({ condition: conditionName });
    }
  };
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterClick = (filter) => {
    setCurrentFilter((prevFilter) => (prevFilter === filter ? null : filter));
  };
  const handlePriceClick = () => {
    setShowPriceSlider((prev) => !prev);
    setCurrentFilter(currentFilter !== "Prix" ? "Prix" : null);
  };

  const genreOptions = [
    { id: 1, name: "Shonen" },
    { id: 2, name: "Shojo" },
    { id: 3, name: "Seinen" },
    { id: 4, name: "Josei" },
    { id: 5, name: "Kodomo" },
    { id: 6, name: "Isekai" },
  ];
  const conditionOptions = [
    { id: 1, name: "abîmé" },
    { id: 2, name: "bon état" },
    { id: 3, name: "comme neuf" },
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
                    onClick={() => handleFilterClick("Genres")}
                  >
                    Genres
                  </button>
                  {currentFilter === "Genres" && (
                    <ul>
                      {genreOptions.map((genre) => (
                        <button
                          type="button"
                          key={genre.id}
                          onClick={() => handleFilterSelection(genre.id)}
                          className={
                            selectedGenreId === genre.id ? "active" : ""
                          }
                        >
                          {genre.name}
                        </button>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    className={`condition ${currentFilter === "Condition" ? "active" : ""}`}
                    onClick={() => handleFilterClick("Condition")}
                  >
                    État
                  </button>
                  {currentFilter === "Condition" && (
                    <ul>
                      {conditionOptions.map((condition) => (
                        <button
                          type="button"
                          key={condition.id}
                          onClick={() =>
                            handleConditionSelection(condition.name)
                          }
                          className={
                            selectedConditionName === condition.name
                              ? "active"
                              : ""
                          }
                        >
                          {condition.name}
                        </button>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <button
                    type="button"
                    className={`condition ${currentFilter === "Prix" ? "active" : ""}`}
                    onClick={handlePriceClick}
                  >
                    Prix
                  </button>
                  {showPriceSlider && <PriceSlider />}
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
