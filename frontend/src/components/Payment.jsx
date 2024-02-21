import "./Payment.css";
import cartePayment from "../assets/cartePayment.png";
import crypte from "../assets/crypte1.png";

function Payment() {
  return (
    <div>
      <p>Résumé de ta commande</p>
      <div className="final-price">
        <p>Commande</p>
        <p>Frais de port</p>
        <p>Total</p>
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
