import "./MyAnounces.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MyAnounces() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailManga, setDetailManga] = useState(null);
  const [setUserId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.info("récupération des datas", response.data);

        return response.json();
      })
      .then((data) => {
        const detail = data.length > 0 ? data[0] : null;

        setDetailManga(data);
        setUserId(detail.user_id);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des détails de l'annonce",
          error
        );
      });
  }, [id]);

  if (!detailManga) {
    return <p>Chargement des détails...</p>;
  }
  // ajuster l'url pour la redirection lorsqu'on clique sur modifier l'annonce
  const navigateToModifyPageAnounce = () => {
    navigate(`/ModifyPageAnounce/${id}`, {
      // state: { articleData: detailManga[0] },
    });
  };
  return (
    <div>
      <div className="containerAnounce">
        <div className="ContainerImage">
          <div className="imagePrimary">
            <img
              className="imageSell1"
              src={`http://localhost:3310${detailManga[0].image_paths[0]}`}
              alt=""
            />
          </div>
          <div className="imageSecond">
            <img
              className="imageSell2"
              src={`http://localhost:3310${detailManga[0].image_paths[1]}`}
              alt=""
            />
            <img
              className="imageSell3"
              src={`http://localhost:3310${detailManga[0].image_paths[2]}`}
              alt=""
            />
          </div>
        </div>
        <div className="ContainerInformationSell">
          <p className="informationPrice">{detailManga[0].price} €</p>
          <div className="informationTitle">
            <p>Titre :</p> <p> {detailManga[0].title_search_manga}</p>
          </div>
          <div className="informationDesciption">
            <p>Description :</p> <p>{detailManga[0].description}</p>
          </div>
          <div className="informationEtat">
            <p>État :</p> <p> {detailManga[0].name_condition}</p>
          </div>
          <div className="informationISBN">
            <p>ISBN :</p> <p> {detailManga[0].volume_ISBN}</p>
          </div>
          <div className="informationVues">
            <p>Nombre de vues :</p>
            <p>{detailManga[0].view_number}</p>
          </div>
          <div className="informationDate">
            <p>Ajouté le :</p>
            <p>
              {detailManga[0].publication_date_advert
                ? new Date(detailManga[0].publication_date_advert)
                    .toLocaleString("fr-FR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })
                    .replace(", ", " à ")
                : ""}
            </p>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          className="btnModSup"
          type="button"
          onClick={navigateToModifyPageAnounce}
        >
          Modifier l'annonce
        </button>
        <button className="btnModSup" type="button">
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default MyAnounces;
