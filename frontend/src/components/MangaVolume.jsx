import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./MangaVolume.css";

function MangaVolume() {
  const { id } = useParams();
  const [volumes, setVolumes] = useState([]);

  // Get the list of volumes given the manga id
  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/volumes/${id}`)
      .then((response) => {
        setVolumes(response.data);
        console.info("volumes:", response.data);
        console.info("a la recherche de l'info");
      })
      .catch((error) => {
        console.error("Error fetching volumes :", error);
      });
  }, []);

  const hasAdvert = (volumeId) => {
    const checkedVolume = volumes.find((item) => item.id === volumeId);
    return (
      checkedVolume &&
      checkedVolume.advert_ids &&
      JSON.stringify(checkedVolume.advert_ids) !== JSON.stringify([null])
    );
  };

  return (
    <div>
      <div className="volumes-container">
        {volumes.map((volume) => (
          <Link to={`/explore/volume/${volume.id}`}>
            <button
              type="button"
              className={
                hasAdvert(volume.id)
                  ? "volume clickable-volume"
                  : "volume disabled-volume"
              }
              key={volume.id}
            >
              <img
                src={`http://localhost:3310${volume.image}`}
                alt={volume.title}
              />
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MangaVolume;
