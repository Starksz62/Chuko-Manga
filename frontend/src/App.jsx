/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "./context/UserContext";

// import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

import "./App.css";
import "./style/global.css";
import "./style/variables.css";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div className="mainContainer">
        {/* <LeftNavbar /> */}
        <div className="main">
          <HeaderNav />
          <Outlet />
          {/* <PrefilterAdvertByDesc />
        <PrefilterAdvertByBatch /> */}
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
