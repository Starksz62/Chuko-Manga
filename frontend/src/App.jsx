import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";
// import LeftNavbar from "./components/LeftNavbar";

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
