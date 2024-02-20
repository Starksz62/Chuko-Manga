// import { useEffect } from "react";
// import axios from "axios";
import logo from "./assets/logo.svg";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  // Test to fetch advert cards
  // const getAdvertCards = () => {
  //   axios.get("http://localhost:3310/api/display-adverts").then((res) => {
  //     console.info(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getAdvertCards();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React !</p>

        <Counter />

        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
