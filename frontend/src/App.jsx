import { useState, useMemo, useEffect } from "react";
import { Outlet } from "react-router-dom";

import UserContext from "./context/UserContext";
import { NotificationProvider } from "./context/NotificationContext";

import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
import { FiltersProvider } from "./context/FilterContext";

import "./App.css";
import "./style/global.css";
import "./style/variables.css";

function App() {
  const [auth, setAuth] = useState({ token: null, userId: null });
  const userContextValue = useMemo(() => ({ auth, setAuth }), [auth]);
  console.info("blabla", auth);
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      try {
        const authData = JSON.parse(storedAuth);
        if (authData.token && authData.userId) {
          setAuth({ token: authData.token, userId: authData.userId });
        }
      } catch (error) {
        console.error("Error parsing auth from localStorage", error);
      }
    }
  }, []);
  return (
    <FiltersProvider>
      <UserContext.Provider value={userContextValue}>
        <NotificationProvider>
          <div className="mainContainer">
            <LeftNavbar />
            <div className="mainContent">
              <HeaderNav />
              <Outlet />
              <Footer />
            </div>
          </div>
        </NotificationProvider>
      </UserContext.Provider>
    </FiltersProvider>
  );
}

export default App;
