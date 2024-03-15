import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFilters } from "../context/FilterContext";
import AdvertCard from "../components/AdvertCard";

function Explore() {
  const [dataAdverts, setDataAdverts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const batchFromUrl = queryParams.get("batch");
  const { filters, setBatch } = useFilters();
  console.info("Valeur de batch récupérée de l'URL :", batchFromUrl);

  useEffect(() => {
    setBatch(batchFromUrl);
    const fetchData = async () => {
      try {
        let url = "http://localhost:3310/api/find-recent-adverts?";
        url += batchFromUrl === "true" ? "batch=true" : "batch=false";
        if (filters.genreId) {
          url += `&genreId=${filters.genreId}`;
        }
        if (filters.condition) {
          url += `&conditionName=${filters.condition}`;
        }
        if (filters.priceMin) {
          url += `&minPrice=${filters.priceMin}`;
        }
        if (filters.priceMax) {
          url += `&maxPrice=${filters.priceMax}`;
        }

        console.info("URL de la requête fetch :", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur HTTP, statut : ${response.status}`);
        }
        const data = await response.json();
        setDataAdverts(data);
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données:",
          error
        );
      }
    };

    fetchData();
  }, [
    batchFromUrl,
    filters.genreId,
    filters.condition,
    filters.priceMin,
    filters.priceMax,
  ]);

  return (
    <div className="filteredAdverts">
      {dataAdverts.length > 0 ? (
        dataAdverts.map((dataAdvert) => (
          <AdvertCard key={dataAdvert.id} advert={dataAdvert} />
        ))
      ) : (
        <p>Aucun article ne correspond à vos critères de recherche.</p>
      )}
    </div>
  );
}

export default Explore;
