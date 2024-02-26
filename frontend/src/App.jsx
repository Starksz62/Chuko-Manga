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

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts-byseller/1`)
      .then((res) => res.json())
      .then((data) => {
        console.info("articles :", articles);
        setArticles(data);
      });
  }, []);

  return (
    <>
      {/* <LeftNavbar />
      <HeaderNav />
      <Outlet context={[data]} />; */}
      <div className="containerOnglets">
        <div className="containerButton">
          <button type="button" className="buttonOnglet">
            Articles
          </button>
          <button type="button" className="buttonOnglet">
            Mes évaluations
          </button>
          <button type="button" className="buttonOnglet">
            Mon historique d'achat
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
