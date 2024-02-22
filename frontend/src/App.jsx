// import { useEffect } from "react";
// import axios from "axios";

import "./App.css";
// eslint-disable-next-line import/no-named-as-default
import CreerProfil from "./pages/CreerProfil";

function App() {
  // Test to fetch advert cards
  // const getAdvertCards = () => {
  //   axios.get("http://localhost:3310/api/display-adverts/1").then((res) => {
  //     console.info(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getAdvertCards();
  // }, []);

  return <CreerProfil />;
}

export default App;
