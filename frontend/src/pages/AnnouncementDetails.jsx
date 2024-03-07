import "./AnnouncementDetails.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnnounceDetail from "../components/AnnouncementDetails/AnnounceDetail";

function AnnouncementDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailManga, setDetailManga] = useState(null);
  const [activeTab, setActiveTab] = useState("annonce");
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const detail = data.length > 0 ? data[0] : null;

        console.info(detail.user_id);
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
  const navigateToPaymentPage = () => {
    console.info("Données envoyées à la page de paiement :", detailManga[0]);
    navigate(`/PaymentPage/${id}`, {
      state: { articleData: detailManga[0] },
    });
  };
  return (
    <div>
      <div className="container-Details">
        <div className="image-manga-sell">
          <img src={detailManga[0].image_paths[0]} alt="" />
          <img src={detailManga[0].image_paths[1]} alt="" />

          <div className="information-manga-sell">
            <p className="information-price">{detailManga[0].price} €</p>
            <p>{detailManga[0].title_search_manga}</p>
            <p className="description-annonce">{detailManga[0].description}</p>
            <div className="information-etat">
              <p>État:</p> <p> {detailManga[0].name_condition}</p>
            </div>
            <div className="information-title">
              <p>titre:</p>
              <p>
                {detailManga[0].manga_title},{detailManga[0].volume_title}
              </p>
            </div>
            <div className="information-date">
              <p>Ajouté: Il y a </p>
              <p>{detailManga[0].time} heure(s)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="button-bar">
        <button
          className="btn active"
          type="button"
          onClick={navigateToPaymentPage}
        >
          Acheter
        </button>
        <button className="btn" type="button">
          Faire une Offre
        </button>
        <button className="btn" type="button">
          Message
        </button>
        <button className="btn" type="button">
          Favoris
        </button>
      </div>
      <div className="tab-system">
        <div className="tabs">
          <button
            onClick={() => setActiveTab("annonce")}
            className={`tab ${activeTab === "annonce" ? "active" : ""}`}
            type="button"
          >
            Détails annonce
          </button>
          <button
            onClick={() => setActiveTab("manga")}
            className={`tab ${activeTab === "manga" ? "active" : ""}`}
            type="button"
          >
            Détails manga
          </button>
        </div>
        <div
          className={`content ${activeTab === "annonce" ? "content-annonce" : "content-manga"}`}
        >
          {activeTab === "annonce" && (
            <div>
              <AnnounceDetail userId={userId} id={id} />
            </div>
          )}
          {activeTab === "manga" && (
            <div>
              {/* rajout de la partie de Loraine */}
              <p>Contenu pour Détails manga</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default AnnouncementDetail;
