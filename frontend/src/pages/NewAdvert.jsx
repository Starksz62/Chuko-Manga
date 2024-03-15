import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PlusIcon from "../assets/Plus_Icon.png";
import DeleteIcon from "../assets/Delete_Icon.png";

import "./NewAdvert.css";

function NewAdvert() {
  const navigate = useNavigate();
  // States designed to display options for selection
  const [conditionList, setConditionList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState("");
  const [volumeList, setVolumeList] = useState([]);

  // State designed to switch tab : selling a tome or a batch
  const [batch, setBatch] = useState(0);

  // States designed to handle values provided by user
  const [advertTitle, setAdvertTitle] = useState("");
  const [description, setDescription] = useState("");
  const [conditionId, setConditionId] = useState(null);
  const [price, setPrice] = useState(null);
  const [volumeId, setVolumeId] = useState(null);
  const [priceErr, setPriceErr] = useState(false);
  const alert = 0;
  const userId = 1;
  const publicationDate = new Date().toISOString().split("T")[0];

  // Variables designed to control user's input
  const MAX_LENGTH_TITLE = 40;
  const MAX_LENGTH_DESC = 255;
  const maxTitleReached = advertTitle.length >= MAX_LENGTH_TITLE;
  const maxDescReached = description.length >= MAX_LENGTH_DESC;

  // States designed to preview and transfer images
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

  // Handle image selection and create image preview
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
    return () => {
      for (const key in files) {
        if (files[key]) {
          URL.revokeObjectURL(previewUrls[key]);
        }
      }
    };
  }, [files]);

  // Set manga selection
  const handleSelectedManga = (e) => {
    setVolumeList([]);
    setSelectedManga(e.target.value);
    // console.info("Manga selected:", selectedManga);
  };

  // Fetch condition's list, manga's list and volume's list
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

  // Delete selected image and corresponding preview
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

  // Manage and control user's inputs
  const handleTitleChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH_TITLE) {
      setAdvertTitle(e.target.value);
    }
  };

  const handleDescChange = (e) => {
    if (e.target.value.length <= MAX_LENGTH_DESC) {
      setDescription(e.target.value);
    }
  };

  const handlePriceChange = (e) => {
    setPriceErr(false);
    const inputValue = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(inputValue)) {
      setPrice(inputValue);
      console.info("regex.test:", regex.test(inputValue));
    }
    if (!regex.test(inputValue)) {
      setPriceErr(true);
      console.info("regex.test:", regex.test(inputValue));
    }
  };

  // Submit form and redirect to user's profile
  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("upload files01 ", files);
    const formData = new FormData();
    formData.append("title_search_manga", advertTitle);
    formData.append("description", description);
    formData.append("article_condition_id", conditionId);
    formData.append("price", price);
    formData.append("manga_id", selectedManga);
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
        navigate(`/profilUser/${userId}`);
      })
      .catch((error) => {
        console.error("Error creating advert", error);
      });
  };

  return (
    <div className="new-advert">
      <h1>Crée ton annonce</h1>
      <form onSubmit={handleSubmit}>
        <div className="picture-container">
          {["image1", "image2", "image3"].map((key) => (
            <div key={key} className="picture-box">
              <label className="label-picture" htmlFor="file">
                <img src={PlusIcon} alt="Ajouter" />
              </label>
              <input
                id="file"
                type="file"
                name={key}
                onChange={handleImageChange}
              />
              {previewUrls[key] && (
                <div className="preview-container">
                  <img
                    className="preview-image"
                    src={previewUrls[key]}
                    alt="Preview"
                  />
                  <button
                    className="delete-preview"
                    type="button"
                    onClick={() => deleteFile(key)}
                  >
                    <img src={DeleteIcon} alt="delete" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <label htmlFor="title">Titre </label>
        <input
          className={maxTitleReached ? "length-max-reached" : "length-ok"}
          type="text"
          id="title"
          name="title_search_manga"
          value={advertTitle}
          onChange={handleTitleChange}
          placeholder="ex: Naruto, tome 44"
          required="required"
        />
        <div className={maxTitleReached ? "warning" : "warning hide-warning"}>
          40 caractères maximum
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleDescChange}
          placeholder="ex: Pages intactes, mais couverture légèrement usée"
          required="required"
        />
        <div className={maxDescReached ? "warning" : "warning hide-warning"}>
          255 caractères maximum
        </div>
        <label htmlFor="condition">Etat</label>
        <select
          id="condition"
          name="article_condition_id"
          onChange={(e) => setConditionId(e.target.value)}
        >
          <option value="">Sélectionne l'état de ton article</option>
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
          value={price}
          onChange={handlePriceChange}
          placeholder="0.00€"
          required="required"
        />
        <div className={priceErr ? "warning" : "warning hide-warning"}>
          Format incorrect
        </div>
        <div className="tab-container">
          <button
            type="button"
            id="button-tome"
            onClick={() => setBatch(0)}
            className={
              batch === 0 ? "active-color tome-active" : "inactive-tab"
            }
          >
            Vends un tome
          </button>
          <button
            type="button"
            id="button-batch"
            onClick={() => setBatch(1)}
            className={
              batch === 1 ? "active-color batch-active" : "inactive-tab"
            }
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
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default NewAdvert;
