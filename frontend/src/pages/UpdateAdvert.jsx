import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PlusIcon from "../assets/Plus_Icon.png";
import DeleteIcon from "../assets/Delete_Icon.png";

import "./UpdateAdvert.css";

function UpdateAdvert() {
  const { id } = useParams();
  const navigate = useNavigate();
  // States designed to display options for selection
  const [conditionList, setConditionList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState("");
  const [volumeList, setVolumeList] = useState([]);

  // State designed to switch tab : selling a tome or a batch
  const [batch, setBatch] = useState(0);

  // States designed to handle values provided by user
  // const [advertTitle, setAdvertTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [conditionId, setConditionId] = useState(null);
  const [formData, setFormData] = useState({});
  const [volumeId, setVolumeId] = useState(null);
  const alert = 0;
  const userId = 1;
  const publicationDate = new Date().toISOString().split("T")[0];

  // State designed to preview and transfer images
  const [files, setFiles] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [previewUrls, setPreviewUrls] = useState({
    image1: null,
    image2: null,
    image3: null,
  });

  const handleImageChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  useEffect(() => {
    for (const key in files) {
      if (files[key]) {
        const url = URL.createObjectURL(files[key]);
        setPreviewUrls((prevUrls) => ({ ...prevUrls, [key]: url }));
      }
    }
    // Clean up the URLs when component unmounts or files change
    return () => {
      for (const key in files) {
        if (files[key]) {
          URL.revokeObjectURL(previewUrls[key]);
        }
      }
    };
  }, [files]);

  const handleSelectedManga = (e) => {
    setVolumeList([]);
    setSelectedManga(e.target.value);
    // console.info("Manga selected:", selectedManga);
  };

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3310/api/conditions"),
      axios.get("http://localhost:3310/api/mangas"),
    ])
      .then((responses) => {
        // console.info("Condition are", responses[0].data);
        // console.info("Mangas are", responses[1].data);
        setConditionList(responses[0].data);
        setMangaList(responses[1].data);
      })
      .catch((error) => {
        console.error("Error fetching conditions and mangas:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedManga !== "") {
      axios
        .get(`http://localhost:3310/api/volumes/${selectedManga}`)
        .then((res) => {
          // console.info("Volumes are", res.data);
          setVolumeList(res.data);
        })
        .catch((error) => {
          console.error("Error fetching volumes:", error);
        });
    }
  }, [selectedManga]);

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.info("récupération de l'annonce :", data);
        setFormData(data[0]);
      })
      .catch((error) => {
        console.error("Error get advert:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const deleteFile = (key) => {
    const updatedFiles = { ...files };
    updatedFiles[key] = null;
    setFiles(updatedFiles);
    if (previewUrls[key]) {
      const updatedPreviewUrls = { ...previewUrls };
      updatedPreviewUrls[key] = null;
      setPreviewUrls(updatedPreviewUrls);
    }
  };

  const handleUpdateanounce = (e) => {
    e.preventDefault();
    console.info("upload files01 ", files);
    const data = new FormData();
    data.append("title_search_manga", formData.title);
    data.append("description", formData.description);
    data.append("article_condition_id", formData.conditionId);
    data.append("price", formData.price);
    data.append("manga_id", formData.selectedManga);
    if (volumeId !== null) {
      formData.append("volume_id", volumeId);
    }
    formData.append("batch", batch);
    formData.append("alert", alert);
    formData.append("user_id", userId);
    formData.append("publication_date_advert", publicationDate);
    for (const key in files) {
      if (files[key]) {
        console.info(key, files[key]);
        formData.append(key, files[key]);
      }
    }
    console.info("Data to send:", formData);
    axios
      .post("http://localhost:3310/api/new-advert", formData)
      .then((res) => {
        console.info("Advert created successfully", res.data);
      })
      .catch((error) => {
        console.error("Error creating advert", error);
      });
    navigate(`/profilUser/${userId}`);
  };

  return (
    <div className="update-advert">
      <h1>Modifie ton annonce</h1>
      {formData && (
        // // mettre soit la ligne 172 ou 171 (et décommenter aussi la const hangleUpdateanounce (ligne 132 à 164))
        <form onSubmit={handleUpdateanounce}>
          {/* <form> */}
          <div className="picture-container">
            {[0, 1, 2].map((index) => (
              <div key={index} className="picture-box1">
                {formData.image_paths && formData.image_paths[index] ? (
                  <>
                    <img
                      src={`http://localhost:3310${formData.image_paths[index]}`}
                      alt={`imageAnnonce ${index + 1}`}
                      className="preview-image"
                    />
                    <button
                      className="delete-preview"
                      type="button"
                      onClick={() => deleteFile(index)}
                    >
                      <img src={DeleteIcon} alt="delete" />
                    </button>
                  </>
                ) : (
                  <>
                    <label className="label-picture" htmlFor="file">
                      <img src={PlusIcon} alt="Ajouter" />
                    </label>
                    <input
                      id="file"
                      type="file"
                      name={`image${index + 1}`}
                      onChange={handleImageChange}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
          <label htmlFor="title">Titre </label>
          <input
            type="text"
            id="title"
            name="title_search_manga"
            value={formData.title_search_manga}
            onChange={handleChange}
            placeholder="ex: Naruto, tome 44"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="ex: Pages intactes, mais couverture légèrement usée"
          />
          <label htmlFor="condition">Etat</label>
          <select
            id="condition"
            name="article_condition_id"
            // onChange={(e) => setConditionId(e.target.value)}
          >
            <option value="">{formData.name_condition}</option>
            {conditionList.map((conditionItem) => (
              <option key={conditionItem.id} value={conditionItem.id}>
                {conditionItem.name_condition}
              </option>
            ))}
          </select>
          <label htmlFor="price">Prix hors frais de port </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder=" "
          />
          <div className="tab-container">
            <button
              type="button"
              id="button-tome"
              onClick={() => setBatch(0)}
              className={batch === 0 ? "active-tab" : "inactive-tab"}
            >
              Vends un tome
            </button>
            <button
              type="button"
              id="button-batch"
              onClick={() => setBatch(1)}
              className={batch === 1 ? "active-tab" : "inactive-tab"}
            >
              Vends un lot
            </button>
          </div>
          <div className="ref">Référencement</div>
          {batch === 0 ? (
            <>
              <label htmlFor="manga" className="instruction">
                Associe ton annonce au manga correspondant dans la liste
              </label>
              <select
                id="manga"
                name="manga_id"
                onChange={(e) => {
                  handleSelectedManga(e);
                }}
              >
                <option value="">Sélectionne ton manga</option>
                {mangaList.map((manga) => (
                  <option key={manga.id} value={manga.id}>
                    {manga.title}
                  </option>
                ))}
              </select>
              <label htmlFor="volume" className="instruction">
                Associe ton annonce au volume correspondant dans la liste
              </label>
              <select
                id="volume"
                name="volume_id"
                onChange={(e) => setVolumeId(e.target.value)}
              >
                <option value="">Sélectionne le volume</option>
                {volumeList.map((volumeItem) => (
                  <option key={volumeItem.id} value={volumeItem.id}>
                    {volumeItem.title}
                  </option>
                ))}
              </select>
            </>
          ) : (
            <>
              <label htmlFor="manga" className="instruction">
                Associe ton annonce au manga correspondant dans la liste
              </label>
              <select
                id="manga"
                name="manga_id"
                onChange={(e) => {
                  handleSelectedManga(e);
                }}
              >
                <option value="">Sélectionne ton manga</option>
                {mangaList.map((manga) => (
                  <option key={manga.id} value={manga.id}>
                    {manga.title}
                  </option>
                ))}
              </select>
            </>
          )}
          <button className="add-button" type="submit">
            Modifier
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateAdvert;