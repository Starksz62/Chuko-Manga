import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./OngletProfil.css";

function OngletProfil() {
  const { advertId, id } = useParams();
  const [annonces, setAnnonces] = useState();
  const [evaluations, setEvaluations] = useState([]);
  const [historyOrders, setHistoryOrders] = useState([]);
  const [ongletActif, setongletActif] = useState("Mes annonces");

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-adverts-byseller/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.info("Mes annonces dans OngletProfil:", data);
        setAnnonces(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3310/api/user-profil-com/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.info("commentairesTableau:", data);
        setEvaluations(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3310/api/display-order-history-bybuyer/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.info("Mon historique d'achat:", data);
        setHistoryOrders(data);
      });
  }, []);

  function renderStars(averageRating) {
    const fullStars = Math.floor(averageRating); // Nombre d'étoiles pleines
    const decimalPart = averageRating - fullStars; // Partie décimale de la note
    let partialStar = ""; // Classe pour l'étoile partielle
    // Déterminer la classe de l'étoile partielle en fonction de la partie décimale
    if (decimalPart >= 0.75) {
      partialStar = "half-star";
    } else if (decimalPart >= 0.25) {
      partialStar = "half-star";
    } else {
      partialStar = "empty-star";
    }
    // Création des étoiles en fonction du nombre d'étoiles pleines et de l'étoile partielle
    const stars = [];
    for (let i = 0; i < 5; i += 1) {
      if (i < fullStars) {
        stars.push(
          <div key={i} className="star full-star">
            ★
          </div>
        );
      } else if (i === fullStars && partialStar === "half-star") {
        stars.push(
          <div key={i} className={`star ${partialStar}`}>
            ★
          </div>
        );
      } else {
        stars.push(
          <div key={i} className="star empty-star">
            ★
          </div>
        );
      }
    }
    return <div className="starcontainer">{stars}</div>;
  }

  const averageRating =
    evaluations.reduce(
      (total, evaluation) => total + parseFloat(evaluation.average_rating),
      0
    ) / evaluations.length;

  function orderStatusClass(status) {
    switch (status) {
      case "completed":
        return "completed";
      case "pending":
        return "pending";
      case "cancelled":
        return "cancelled";
      default:
        return "default";
    }
  }

  return (
    <div className="containerOnglets">
      <div className="containerButton">
        <button
          type="button"
          className="buttonOnglet"
          onClick={() => setongletActif("Mes annonces")}
        >
          Mes annonces
        </button>
        <button
          type="button"
          className="buttonOnglet"
          onClick={() => setongletActif("Mes évaluations")}
        >
          Mes évaluations
        </button>
        <button
          type="button"
          className="buttonOnglet"
          onClick={() => setongletActif("Mon historique d'achat")}
        >
          Mon historique d'achat
        </button>
      </div>

      <div className="containerInformations">
        {ongletActif === "Mes annonces" && (
          <div className="containerAnnonces">
            {annonces?.map((annonce) => (
              <div key={advertId}>
                <li className="cardAnnonces">
                  <Link key={advertId} to={`/myAnounces/${id}`}>
                    <div>
                      <img
                        className="imagePathAnnonces"
                        src={`http://localhost:3310${annonce.image_path}`}
                        alt="image_article_seller"
                      />
                      <div className="titleSearchMangaAnnonces">{`${annonce.title_search_manga}`}</div>
                      <div className="priceAnnonces">
                        {`${annonce.price}`} €
                      </div>
                      <div className="name_condition">{`${annonce.name_condition}`}</div>
                    </div>
                  </Link>
                </li>
              </div>
            ))}
          </div>
        )}

        {ongletActif === "Mes évaluations" && (
          <div className="containerEvaluations">
            {evaluations?.length > 0 && (
              <div className="containerNote">
                {console.info(evaluations)}
                <div className="average_rating">{`${(Math.round(averageRating * 100) / 100).toFixed(2)}`}</div>
                <div className="StarNumbCom">
                  <div className="starcontainer">
                    {renderStars(parseFloat(averageRating))}
                  </div>
                  <div className="Number_comment">({evaluations.length})</div>
                </div>
              </div>
            )}
            {evaluations?.map((evaluation) => (
              <div key={evaluation.id} className="cardCom">
                {console.info(evaluation.average_rating)}
                <div className="containerCom">
                  <div className="pictureBuyerCom">
                    <img
                      className="picture_buyer"
                      src={`${evaluation.picture_buyer}`}
                      alt="image_buyer"
                    />
                  </div>
                  <div className="commentBuyer">
                    <div className="speudoBuyer">{`${evaluation.pseudo}`}</div>
                    <div className="createdOn">
                      {`${evaluation.created_on ? new Date(evaluation.created_on).toLocaleDateString("fr-FR").split("/").join("-") : ""}`}
                    </div>
                    <div className="rating">
                      {renderStars(parseFloat(evaluation.rating))}
                    </div>
                    <div className="comment">{`${evaluation.comment}`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {ongletActif === "Mon historique d'achat" && (
          <div className="containerAnnonces">
            {historyOrders?.map((order) => (
              <div key={order.id}>
                <li className="cardAnnonces">
                  <div>
                    <img
                      className="imagePathAnnonces"
                      src={`http://localhost:3310${order.image_path}`}
                      alt="image_article_seller"
                    />
                    <div className="titleSearchMangaAnnonces">{`${order.title_search_manga}`}</div>
                    <div className="priceAnnonces">
                      {`${order.total_price}`} €
                    </div>
                    <div className="name_condition">{`${order.name_condition}`}</div>
                    <div className="orderDate">
                      Acheté le :{" "}
                      {`${order.order_date ? new Date(order.order_date).toLocaleDateString("fr-FR").split("/").join("-") : ""}`}
                    </div>
                    <div className="statusOrder">
                      Status :{" "}
                      <span className={orderStatusClass(order.status_order)}>
                        {order.status_order}
                      </span>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OngletProfil;
