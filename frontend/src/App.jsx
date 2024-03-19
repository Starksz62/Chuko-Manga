/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable object-shorthand */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "./context/UserContext";
import NotificationProvider from "./context/NotificationContext";

import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

import "./App.css";
import "./style/global.css";
import "./style/variables.css";

function App() {
  const [auth, setAuth] = useState();

  return (
    <UserContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <NotificationProvider>
        <div className="mainContainer">
          <LeftNavbar className="leftNavbar" />
          <div className="mainContent">
            <HeaderNav />
            <Outlet />
            <Footer />
          </div>
        </div>
      </NotificationProvider>
    </UserContext.Provider>
  );
}

export default App;
