import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PlusIcon from "../assets/Plus_Icon.png";
import DeleteIcon from "../assets/Delete_Icon.png";

import "./AdvertForm.css";

function AdvertForm({
  advertTitle,
  batch,
  // conditionList,
  deleteFile,
  description,
  handleDescChange,
  handleImageChange,
  handlePriceChange,
  handleSelectedManga,
  handleSubmit,
  handleTitleChange,
  // mangaList,
  maxDescReached,
  maxTitleReached,
  price,
  priceErr,
  previewUrls,
  setBatch,
  setConditionId,
  setVolumeId,
  volumeList,
}) {
  const [conditionList, setConditionList] = useState([]);
  const [mangaList, setMangaList] = useState([]);

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

  return (
    <form className="advert-form" onSubmit={handleSubmit}>
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
      <label htmlFor="title">Titre *</label>
      <input
        className={maxTitleReached && "wrong-input"}
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
      <label htmlFor="description">Description *</label>
      <textarea
        className={maxDescReached && "wrong-input"}
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
      <label htmlFor="condition">Etat *</label>
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
      <label htmlFor="price">Prix hors frais de port *</label>
      <input
        className={priceErr && "wrong-input"}
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
        Ajouter
      </button>
    </form>
  );
}

export default AdvertForm;

AdvertForm.propTypes = {
  advertTitle: PropTypes.string.isRequired,
  batch: PropTypes.number.isRequired,
  // conditionList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name_condition: PropTypes.string.isRequired,
  //   })
  // ).isRequired,
  deleteFile: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  handleDescChange: PropTypes.func.isRequired,
  handleImageChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  handleSelectedManga: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  // mangaList: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //   })
  // ).isRequired,
  maxDescReached: PropTypes.bool.isRequired,
  maxTitleReached: PropTypes.bool.isRequired,
  price: PropTypes.string,
  priceErr: PropTypes.bool.isRequired,
  previewUrls: PropTypes.shape({
    image1: PropTypes.string,
    image2: PropTypes.string,
    image3: PropTypes.string,
  }).isRequired,
  setBatch: PropTypes.func.isRequired,
  setConditionId: PropTypes.func.isRequired,
  setVolumeId: PropTypes.func.isRequired,
  volumeList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

AdvertForm.defaultProps = {
  price: null,
};
