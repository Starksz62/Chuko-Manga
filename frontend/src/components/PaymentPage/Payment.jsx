/* eslint-disable react/prop-types */
import "./Payment.css";

function Payment({ price }) {
  const cost = parseFloat(price);
  const fraisDePort = (cost * 5) / 100;
  const total = cost + fraisDePort;

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
        <button type="button">Paiement</button>
      </div>
      <div className="logo-card-payment">
        <img src="/static/cartePayment.png" alt="payment-card" />
      </div>
      <div className="information-security-payment">
        <img src="/static/crypte1.png" alt="texte protection " />
        <p>Ce paiement est crypté et sécurisé</p>
      </div>
    </div>
  );
}
export default Payment;
