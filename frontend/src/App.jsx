import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// import LeftNavbar from "./components/LeftNavbar";
import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import PrefilterAdvertByDesc from "./components/PrefilterAdvertByDesc";
import PrefilterAdvertByBatch from "./components/PrefilterAdvertByBatch";

// import Footer from "./components/Footer";

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
    <div className="mainContainer">
      <LeftNavbar />
      <div className="main">
        <HeaderNav />
        <Outlet context={[data]} />
        <PrefilterAdvertByDesc />
        <PrefilterAdvertByBatch />
        <Footer />
      </div>
    </div>
  );
}

export default App;
