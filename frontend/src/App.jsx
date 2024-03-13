import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainContainer">
      <LeftNavbar className="leftNavbar" />
      <div className="mainContent">
        <HeaderNav />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
