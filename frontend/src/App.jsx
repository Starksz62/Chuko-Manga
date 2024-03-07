import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

/* eslint-disable import/no-extraneous-dependencies */
function App() {
  return (
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
  );
}

export default App;
