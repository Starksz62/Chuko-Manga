import { useEffect, useState } from "react";
import axios from "axios";

import "./MangaVolume.css";
import { useParams } from "react-router-dom";

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

  // console.info("tada", volumes[0].advert_ids);
  console.info("hasAdvert", hasAdvert(1));

  // const handleVolumeClick = (volume) => {
  //   console.info("ID du manga :", id);
  //   console.info("ID du volume :", volume.id);
  // };

  return (
    <div>
      <div className="volumes-container">
        {volumes.map((volume) => (
          <button
            type="button"
            className={
              hasAdvert(volume.id)
                ? "volume clickable-volume"
                : "volume disabled-volume"
            }
            key={volume.id}
            // onClick={() => handleVolumeClick(volume)}
          >
            <img
              src={`http://localhost:3310${volume.image}`}
              alt={volume.title}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default MangaVolume;
