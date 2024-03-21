/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import AdvertCard from "./AdvertCard";
import "./PrefilterAdvertByDesc.css";

import Left from "../assets/leftlogo.png";
import Right from "../assets/rightlogo.png";

function PrefilterAdvertByDesc() {
  // eslint-disable-next-line no-unused-vars
  const [adverts, setAdverts] = useState([]);
  const [filteredAdverts, setFilteredAdverts] = useState([]);
  const containerRef = useRef(null);

  // Ajoutez un état pour suivre si les images "left" et "right" doivent être affichées
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3310/api/batch-adverts-date-desc")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAdverts(data);
        setFilteredAdverts(data); // Initialize with all adverts
      })
      .catch((error) => {
        console.error("An error occurred while fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Vérifiez si le conteneur a un défilement horizontal et mettez à jour les états de showLeftButton et showRightButton
    if (containerRef.current) {
      setShowLeftButton(containerRef.current.scrollLeft > 0);
      setShowRightButton(
        containerRef.current.scrollWidth > containerRef.current.clientWidth
      );
    }
  }, [filteredAdverts]); // Ajoutez filteredAdverts en tant que dépendance

  function scrollContainer(direction) {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const cardWidth = container.querySelector(".AdvertCard").clientWidth;

    if (direction === "left") {
      container.scrollLeft -= cardWidth * 2;
    } else if (direction === "right") {
      container.scrollLeft += cardWidth * 2;
    }

    // Vérifiez si la position de défilement horizontal permet d'afficher les images "left" et "right" et mettez à jour leurs états
    setShowLeftButton(container.scrollLeft > 0);
    setShowRightButton(
      container.scrollLeft + container.clientWidth < container.scrollWidth
    );
  }

  return (
    <>
      <h1 className="titlePrefiltreDesc">
        Explorer les derniers lots ajoutés :
      </h1>
      <div className="FilterByDateDescWrapper">
        <div className="FilterByDateDesc" ref={containerRef}>
          {showLeftButton && (
            <img
              className="leftButton"
              src={Left}
              alt="left button"
              onClick={() => scrollContainer("left")}
            />
          )}
          {showRightButton && (
            <img
              className="rightButton"
              src={Right}
              alt="right button"
              onClick={() => scrollContainer("right")}
            />
          )}
          <div className="filteredAdverts">
            {filteredAdverts.length > 0 ? (
              filteredAdverts.slice(0, 16).map((advert) => (
                <div key={advert.id} className="AdvertCard">
                  <AdvertCard advert={advert} />
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="seeAllTomesButtonWrapper">
            <Link className="LinkBtnDesc" to="/explore">
              <button type="button" className="bntSeeAllTomesDesc">
                Voir tous les lots
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrefilterAdvertByDesc;
