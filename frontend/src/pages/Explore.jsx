import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import AdvertCard from "../components/AdvertCard";

function Explore() {
  const [dataAdverts, setDataAdverts] = useState([]);
  // const { searchQuery } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const navigate = useNavigate();

  useEffect(() => {
    let apiUrl = "";
    if (type === "Batch") {
      apiUrl = "http://localhost:3310/api/batch-adverts-date-desc";
    } else if (type === "Desc") {
      apiUrl = "http://localhost:3310/api/unique-adverts-date-desc";
    } else {
      navigate("/error");
    }

    if (apiUrl) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setDataAdverts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [type]);
  console.info(dataAdverts);
  // useEffect(() => {
  //   const sendQuery = async () => {
  //     console.info("========", searchQuery);
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3310/api/explore/${searchQuery}`
  //       );
  //       setDataAdvert(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   sendQuery();
  // }, [searchQuery]);

  return (
    <div className="filteredAdverts">
      {dataAdverts.map((dataAdvert) => {
        return <AdvertCard key={dataAdvert.id} advert={dataAdvert} />;
      })}
    </div>
  );
}

export default Explore;
