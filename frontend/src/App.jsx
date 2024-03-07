import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainContainer">
      {/* <LeftNavbar /> */}
      <div className="main">
        <HeaderNav />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
