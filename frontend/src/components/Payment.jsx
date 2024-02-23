/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import "./Payment.css";
import cartePayment from "../assets/cartePayment.png";
import crypte from "../assets/crypte1.png";

function Payment({ price }) {
  const fraisDePort = (price * 5) / 100;
  const total = price + fraisDePort;
  return (
    <div>
      <p>Résumé de ta commande</p>
      <div className="final-price">
        <p>Commande : {price} </p>
        <p>Frais de port : {fraisDePort} </p>
        <p>Total :{total} </p>
      </div>
      <div className="confirmation-payment">
        <button>Paiement</button>
      </div>
      <div className="logo-card-payment">
        <img src={cartePayment} alt="payment-card" />
      </div>
      <div className="information-security-payment">
        <img src={crypte} alt="texte protection " />
        <p>Ce paiement est crypté et sécurisé</p>
      </div>
    </div>
  );
}
export default Payment;
