/* eslint-disable jsx-a11y/label-has-associated-control */
import domicile from "../assets/domicile.png";
import espaceReserve from "../assets/espaceReserve.png";

function DeliveryOption() {
  return (
    <div className="delivery-option-container">
      <div className="delivery-option-pickup-point">
        <img src={espaceReserve} alt="" />
        <h2>Option de livraison</h2>
        <h3>Envoi au point de relais</h3>
        <label htmlFor="option1">
          <input
            type="radio"
            id="option1"
            name="deliveryOption"
            value="pickupPoint"
            checked
          />
          <p>A partir de...</p>
        </label>
      </div>
      <div className="delivery-option-home">
        <img src={domicile} alt="" />
        <h3>Envoi à domicile</h3>
        <label htmlFor="option2">
          <input
            type="radio"
            id="option2"
            name="deliveryOption"
            value="homeDelivery"
          />
        </label>
        <p>A partir de...</p>
      </div>
    </div>
  );
}

export default DeliveryOption;
