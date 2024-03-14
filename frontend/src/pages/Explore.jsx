import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Importer use params de react router dom,

function Explore() {
  const [dataAdvert, setDataAdvert] = useState("");
  const { searchQuery } = useParams();
  // utiliser use params pour recuprer le params dans la barre d'adresse (voir workshop)
  // utiliser le use effect, en envoyant le params vers le back avec un axios get

  useEffect(() => {
    const sendQuery = async () => {
      console.info("use effect search query:", searchQuery);
      try {
        const response = await axios.get(
          `http://localhost:3310/api/explore/${searchQuery}`
        );
        setDataAdvert(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    sendQuery();
  }, [searchQuery]);

  return (
    <>
      {console.info("return search query:", dataAdvert)}
      <h1>Voici les résultats pour : {searchQuery}</h1>
    </>
  );
}

export default Explore;
