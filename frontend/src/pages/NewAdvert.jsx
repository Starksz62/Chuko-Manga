import { useEffect, useState } from "react";
import axios from "axios";
import PlusIcon from "../assets/Plus_Icon.png";

import "./NewAdvert.css";

function NewAdvert() {
  const [conditions, setConditions] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  const [selectedManga, setSelectedManga] = useState("");
  const [volumeList, setVolumeList] = useState([]);
  const [tabTome, setTabTome] = useState(true);
  const [formData, setFormData] = useState({
    price: "",
    description: "",
    alert: 0,
    batch: !tabTome,
    title_search_manga: "",
    publication_date_advert: new Date().toISOString().split("T")[0],
    user_id: 1,
    manga_id: "",
    volume_id: "",
    article_condition_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        console.info("Condition are", responses[0].data);
        console.info("Mangas are", responses[1].data);
        setConditions(responses[0].data);
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
          console.info("Volumes are", res.data);
          setVolumeList(res.data);
        })
        .catch((error) => {
          console.error("Error fetching volumes:", error);
        });
    }
  }, [selectedManga]);

  const handleTabTome = () => {
    setTabTome(!tabTome);
    // console.info("tabTome", tabTome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("Data to be sent:", formData);
    setFormData({ ...formData, batch: tabTome });
    axios
      .post("http://localhost:3310/api/new-advert", formData)
      .then((res) => {
        console.info("Advert created successfully", res.data);
      })
      .catch((error) => {
        console.error("Error creating advert", error);
      });
  };

  return (
    <div className="new-advert">
      <h1>Crée ton annonce</h1>
      <form onSubmit={handleSubmit}>
        {/* https://www.geeksforgeeks.org/how-to-upload-image-and-preview-it-using-reactjs/ */}
        <div className="picture-container">
          <div className="picture-box">
            <img src={PlusIcon} alt="Ajouter" />
          </div>
          <div className="picture-box">
            <img src={PlusIcon} alt="Ajouter" />
          </div>
          <div className="picture-box">
            <img src={PlusIcon} alt="Ajouter" />
          </div>
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
          value={formData.article_condition_id}
          onChange={handleChange}
        >
          <option value="">Sélectionne l'état de ton article</option>
          {conditions.map((condition) => (
            <option key={condition.id} value={condition.id}>
              {condition.name_condition}
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
          placeholder="0.00€"
        />
        <div className="tab-container">
          <button
            type="button"
            id="button-tome"
            onClick={handleTabTome}
            className={tabTome ? "active-color tome-active" : "inactive-tab"}
          >
            Vends un tome
          </button>
          <button
            type="button"
            id="button-batch"
            onClick={handleTabTome}
            className={!tabTome ? "active-color batch-active" : "inactive-tab"}
          >
            Vends un lot
          </button>
        </div>
        <div className="ref">Référencement</div>
        {tabTome ? (
          <>
            <label htmlFor="manga" className="instruction">
              Tome - Associe ton annonce au manga correspondant dans la liste
            </label>
            <select
              id="manga"
              name="manga_id"
              value={formData.manga_id}
              onChange={(e) => {
                handleChange(e);
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
              Tome - Associe ton annonce au volume correspondant dans la liste
            </label>
            <select
              id="volume"
              name="volume_id"
              value={formData.volume_id}
              onChange={handleChange}
            >
              <option value="">Sélectionne le volume</option>
              {volumeList.map((volume) => (
                <option key={volume.id} value={volume.id}>
                  {volume.title}
                </option>
              ))}
            </select>
          </>
        ) : (
          <>
            <label htmlFor="manga" className="instruction">
              Lot - Associe ton annonce au manga correspondant dans la liste
            </label>
            <select
              id="manga"
              name="manga_id"
              value={formData.manga_id}
              onChange={(e) => {
                handleChange(e);
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
