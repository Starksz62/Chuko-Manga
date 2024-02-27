import "./App.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

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

  return (
    <>
      {/* <LeftNavbar /> */}
      <HeaderNav />
      <Outlet context={[data]} />
      <Footer />
    </>
  );
}

export default App;
