import { useEffect, useState } from "react";
import axios from "axios";

import "./MangaVolume.css";
import { useParams } from "react-router-dom";

function MangaVolume() {
  const { id } = useParams();
  const [volumes, setVolumes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/volumes/${id}`)
      .then((response) => {
        setVolumes(response.data);
      })
      .catch((error) => {
        console.error(
          "Il y a eu une erreur lors de la récupération des volumes : ",
          error
        );
      });
  }, []);

  return (
    <div>
      <div className="volumes-container">
        {volumes.map((volume) => (
          <div className="volume" key={volume.id}>
            <img
              src={`http://localhost:3310${volume.image}`}
              alt={volume.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MangaVolume;
