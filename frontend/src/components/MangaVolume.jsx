import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function MangaVolume({ mangaId }) {
  const [volumes, setVolumes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/volumes?mangaId=${mangaId}`)
      .then((response) => {
        setVolumes(response.data);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des volumes : ",
          error
        );
      });
  }, [mangaId]);

  return (
    <div>
      <h2>Volumes du Manga</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            {volume.title} - Date de sortie: {volume.release_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MangaVolume;
