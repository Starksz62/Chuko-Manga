import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

/* eslint-disable import/no-extraneous-dependencies */
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3310/api/mangas");
        // console.info("Response data:", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const annonces = [
    {
      image: "./src/assets/NarutoTome13.jpg",
      title: "Naruto - Tome 13",
      price: "5,00",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur",
      star: "./src/assets/star.png",
      note: "5",
      comment: "24",
    },
    {
      image: "./src/assets/20centuryboys.jpg",
      title: "20 century boys - Tome 1",
      price: "3,50",
      condition: "Neuf",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur2",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "136",
    },
    {
      image: "./src/assets/AOT.jpg",
      title: "L'attaque des titans - Tome 17",
      price: "4,00",
      condition: "Usé",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur3",
      star: "./src/assets/star.png",
      note: "5",
      comment: "21",
    },
    {
      image: "./src/assets/berserk.jpg",
      title: "Berserk - Tome 1",
      price: "2,00",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur4",
      star: "./src/assets/star.png",
      note: "4,8",
      comment: "258",
    },
    {
      image: "./src/assets/deathnote.jpg",
      title: "Death Note - Tome 6",
      price: "2,50",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur5",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "136",
    },
    {
      image: "./src/assets/hunterxhunter.jpg",
      title: "HunterxHunter - Tome 1",
      price: "4,00",
      condition: "Neuf",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur6",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "136",
    },
    {
      image: "./src/assets/MHA.jpg",
      title: "My Hero Academia - Tome 22",
      price: "3,00",
      condition: "Très bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur7",
      star: "./src/assets/star.png",
      note: "4,7",
      comment: "76",
    },
    {
      image: "./src/assets/nana.jpg",
      title: "Nana - Tome 8",
      price: "2,00",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur8",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "45",
    },
    {
      image: "./src/assets/orangemanga.jpg",
      title: "Orange - Tome 1",
      price: "4,00",
      condition: "Neuf",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur9",
      star: "./src/assets/star.png",
      note: "4,8",
      comment: "30",
    },
    {
      image: "./src/assets/vinlandsaga.jpg",
      title: "Vinland Saga - Tome 1",
      price: "3,00",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur10",
      star: "./src/assets/star.png",
      note: "4,6",
      comment: "98",
    },
    {
      image: "./src/assets/rabbitdoubt.jpg",
      title: "Rabbit Doubt - Tome 1",
      price: "2,50",
      condition: "Usé",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur11",
      star: "./src/assets/star.png",
      note: "4,9",
      comment: "129",
    },
    {
      image: "./src/assets/sailormoon.jpg",
      title: "Sailor Moon - Tome 2",
      price: "3,00",
      condition: "Bon état",
      imageUser: "./src/assets/orange.jpg",
      nameUser: "Utilisateur12",
      star: "./src/assets/star.png",
      note: "4,4",
      comment: "3",
    },
  ];

  return (
    <div className="mainContainer">
      <LeftNavbar />
      <div className="main">
        <HeaderNav />
        {annonces.map((annonce) => (
          <div key={annonce.id} className="annonce-item">
            <Cards data={annonce} />
          </div>
        ))}
        <Outlet context={[data]} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
