/* eslint-disable react/prop-types */
import "./Payment.css";

function Payment({ price }) {
  const cost = parseFloat(price);
  const fraisDePort = (cost * 5) / 100;
  const total = cost + fraisDePort;

  return (
    <div>
      <p>Résumé de ta commande</p>
      <div className="final-price">
        <div className="commande-label">Commande :</div>
        <div className="price-value">{price} €</div>

        <p>Frais de port : {fraisDePort.toFixed(2)} €</p>
        <p>Total : {total.toFixed(2)} €</p>
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
