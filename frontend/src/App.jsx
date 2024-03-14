import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "./Context/UserContext";

import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import { FiltersProvider } from "./Context/FilterContext";

import "./App.css";
import "./style/global.css";
import "./style/variables.css";

function App() {
  const [auth, setAuth] = useState();
  const userContextValue = useMemo(() => ({ auth, setAuth }), [auth]);

  return (
    <FiltersProvider>
      <UserContext.Provider value={userContextValue}>
        <div className="mainContainer">
          <LeftNavbar className="leftNavbar" />
          <div className="mainContent">
            <HeaderNav />
            <Outlet />
            <Footer />
          </div>
        </div>
      </UserContext.Provider>
    </FiltersProvider>
  );
}

export default App;
