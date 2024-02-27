import "./App.css";
// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import LeftNavbar from "./components/LeftNavbar";
// import HeaderNav from "./components/HeaderNav";

// NEW

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3310/api/mangas");
  //       // console.info("Response data:", response.data);
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  const [articles, setArticles] = useState();
  const [evaluations, setEvaluations] = useState([]);
  const [ongletActif, setongletActif] = useState("Articles");

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts-byseller/1`)
      .then((res) => res.json())
      .then((data) => {
        console.info("articles :", data);
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3310/api/user-profil-com/1`)
      .then((res) => res.json())
      .then((data) => {
        // Ajouter une propriété id à chaque objet
        const evaluationsWithIds = [data].map((item, index) => ({
          ...item,
          id: index + 1, // Utiliser l'index + 1 comme ID
        }));
        console.info("commentairesTableau:", evaluationsWithIds);
        setEvaluations(evaluationsWithIds);
      });
  }, []);

  return (
    <>
      {/* <LeftNavbar />
      <HeaderNav />
      <Outlet context={[data]} />; */}
      <div className="containerOnglets">
        <div className="containerButton">
          <button
            type="button"
            className="buttonOnglet"
            onClick={() => setongletActif("Articles")}
          >
            Articles
          </button>
          <button
            type="button"
            className="buttonOnglet"
            onClick={() => setongletActif("Mes évaluations")}
          >
            Mes évaluations
          </button>
          <button
            type="button"
            className="buttonOnglet"
            onClick={() => setongletActif("Mon historique d'achat")}
          >
            Mon historique d'achat
          </button>
        </div>
        <div className="containerInformations">
          <div className="containerArticles">
            {ongletActif === "Articles" &&
              articles?.map((article) => (
                <div key={article.id}>
                  <li className="card">
                    <div>
                      <img
                        className="image_path"
                        src={`${article.image_path}`}
                        alt="image_article_seller"
                      />
                      <p className="title_search_manga">{`${article.title_search_manga}`}</p>
                      <p className="price">{`${article.price}`} €</p>
                      <p className="name_condition">{`${article.name_condition}`}</p>
                    </div>
                  </li>
                </div>
              ))}
          </div>
          <div className="containerEvaluations">
            {ongletActif === "Mes évaluations" &&
              evaluations?.map((evaluation) => (
                <div key={evaluation.id}>
                  <li className="cardCom">
                    <div>
                      <p className="average_rating">{`${evaluation.average_rating}`}</p>
                      <img
                        className="picture_buyer"
                        src={`${evaluation.picture_buyer}`}
                        alt="image_buyer"
                      />
                      <p className="created_on">{`${evaluation.created_on.split("T")[0]}`}</p>
                      <p className="speudo_buyer">{`${evaluation.pseudo}`}</p>
                      <p className="rating">{`${evaluation.rating}`}</p>
                      <p className="com">{`${evaluation.comment}`}</p>
                    </div>
                  </li>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
