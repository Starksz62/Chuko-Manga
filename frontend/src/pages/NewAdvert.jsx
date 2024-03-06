import { useEffect, useState } from "react";
import axios from "axios";

function NewAdvert() {
  const [conditions, setConditions] = useState([]);
  // const [sellTome, setSellTome] = useState(true);
  const [formData, setFormData] = useState({
    price: "",
    description: "",
    alert: 0,
    // batch:
    title_search_manga: "",
    view_number: 0,
    publication_date_advert: new Date().toISOString().split("T")[0],
    delete_advert: 0,
    // user_id:
    // manga_id:
    // volume_id:
    article_condition_id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/conditions")
      .then((res) => {
        console.info("Condition is", res.data);
        setConditions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching conditions:", error);
      });
  }, []);

  // const handleBatchSelection = () => {
  //   setSellTome(!sellTome);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.info("Data to be sent:", formData);
    axios
      .post("http://localhost:3310/api/new-advert", formData)
      .then((res) => {
        console.info("Advert created successfully", res.data);
        // setFormData({
        //   title_search_manga: "",
        //   description: "",
        //   article_condition_id: "",
        //   price: "",
        // });
      })
      .catch((error) => {
        console.error("Error creating advert", error);
      });
  };

  return (
    <>
      <h1>Crée ton annonce</h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="ex: Pages intactes, mais converture légèrement usée"
        />
        <label htmlFor="condition">Etat</label>
        <select
          id="condition"
          name="article_condition_id"
          value={formData.article_condition_id}
          onChange={handleChange}
        >
          <option value="">Choisissez l'état</option>
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
        />
        {/* <div className="section-container">
          <div>Vends un tome</div>
          <div onClick={handleBatchSelection} onKeyDown={handleBatchSelection}>Vends un lot</div>
        </div> */}
        <div>Référencement</div>
        <label htmlFor="manga_id">
          Associe ton annonce au manga correspondant dans la liste
        </label>
        <select
          id="manga_id"
          name="manga_id"
          value={formData.manga_id}
          onChange={handleChange}
        >
          <option value="">Sélectionne ton manga</option>
          {conditions.map((manga) => (
            <option key={manga.id} value={manga.id}>
              {manga.title}
            </option>
          ))}
        </select>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
}

export default NewAdvert;
