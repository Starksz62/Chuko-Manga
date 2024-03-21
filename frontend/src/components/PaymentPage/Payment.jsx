/* eslint-disable react/prop-types */
import "./Payment.css";

import { useNotifications } from "../../context/NotificationContext";

function Payment({ price, articleData }) {
  const cost = parseFloat(price);
  const fraisDePort = (cost * 5) / 100;
  const total = cost + fraisDePort;
  const { addNotification } = useNotifications();

  const handlePayment = () => {
    const imageUrl = `http://localhost:3310${articleData?.image_paths[0]}`;

    addNotification("La vente a été réalisée avec succès !", imageUrl);
  };

  return (
    <div className="resume-payment">
      <p>Résumé de ta commande</p>
      <div className="final-price">
        <div className="commande-label">
          Commande :<div className="price-value">{price} €</div>
        </div>

        <div className="commande-label">
          Frais de port :
          <div className="price-value"> {fraisDePort.toFixed(2)} € </div>
        </div>
        <div className="commande-label">
          Total : <div className="price-value"> {total.toFixed(2)} €</div>
        </div>
      </div>
      <div className="confirmation-payment">
        <button type="button" onClick={handlePayment}>
          Paiement
        </button>
      </div>
      <div className="logo-card-payment">
        <img
          src="http://localhost:3310/static/cartePayment.png"
          alt="payment-card"
        />
      </div>
      <div className="information-security-payment">
        <img
          src="http://localhost:3310/static/crypte1.png"
          alt="texte protection "
        />
        <p>Ce paiement est crypté et sécurisé</p>
      </div>
    </div>
  );
}
export default Payment;
