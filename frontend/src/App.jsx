import "./App.css";
import "./style/global.css";
import "./style/variables.css";
import { Outlet } from "react-router-dom";
// import LeftNavbar from "./components/LeftNavbar";
import LeftNavbar from "./components/LeftNavbar";
import HeaderNav from "./components/HeaderNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mainContainer">
      <LeftNavbar className="leftNavbar" />
      <div className="mainContent">
        <HeaderNav />
        {/* Ne pas ajouter des éléments dans l'app jsx mais dans leurs components ou page pour garder l'app jsx uniquement avec du contenu statique */}
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
