/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";
import Order from "../components/PaymentPage/Order";
import CreditCard from "../components/PaymentPage/creditCard";
import Address from "../components/PaymentPage/Address";
import cross from "../assets/openModal.png";
import Payment from "../components/PaymentPage/Payment";
import DeliveryOption from "../components/PaymentPage/DeliveryOption";

function PaymentPage() {
  const location = useLocation();
  const { articleData } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [showModalCreditCard, setShowModalCreditCard] = useState(false);
  const [adresse, setAdresse] = useState({
    adresse: "",
    ville: "",
    codePostal: "",
  });
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const openModalCreditCard = () => {
    setShowModalCreditCard(true);
  };

  const closeModalCreditCard = () => {
    console.info("Fermeture de la modal");
    setShowModalCreditCard(false);
  };
  const handleAddressChange = (newAddress) => {
    setAdresse(newAddress);
  };

  return (
    <div className="container">
      <div className="navbar-payment">
        <h1 className="title-navbar-payment">Commande</h1>
      </div>
      <h2>Commande</h2>
      <div className="main-content">
        <div className="left-column">
          <div className="order-cards">
            <Order articleInfo={articleData} />
          </div>
        </div>
        <div className="right-column">
          <Payment price={articleData.price} />
        </div>
      </div>
      <h1>Adresse</h1>
      <div className="address-container">
        {adresse.adresse && adresse.ville && adresse.codePostal ? (
          <div className="address-info">
            <p>Adresse: {adresse.adresse}</p>
            <p>Ville: {adresse.ville}</p>
            <p>Code postal: {adresse.codePostal}</p>
          </div>
        ) : (
          <div className="address-container">
            <p>Ajouter une adresse</p>
          </div>
        )}
        {adresse.adresse && adresse.ville && adresse.codePostal ? (
          <div
            className="cross-icon"
            onClick={openModal}
            role="button"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openModal();
              }
            }}
            tabIndex={0}
          >
            <img src={cross} alt="cross" />
            <p>modifie ton adresse</p>
          </div>
        ) : (
          <div className="cross-icon">
            <img
              src={cross}
              onClick={openModal}
              aria-hidden
              alt="cross"
              type="image"
            />
            <p>nouvelle adresse</p>
          </div>
        )}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span
                className="close"
                role="button"
                onClick={closeModal}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    closeModal();
                  }
                }}
                tabIndex={0}
              >
                &times;
              </span>
              <Address
                handleChange={handleAddressChange}
                adresse={adresse}
                updateModal={closeModal}
              />
            </div>
          </div>
        )}
      </div>
      <DeliveryOption />
      <div className="payment-credit-card">
        <h2>Paiement</h2>
        <div className="add-payment-card">
          <p>Ajoute une méthode de paiement</p>

          <img src={cross} alt="cross" onClick={openModalCreditCard} />
        </div>

        <p>Sélectionne le mode de paiement</p>
      </div>
      {showModalCreditCard && (
        <div className="modal">
          <div className="modal-content">
            <CreditCard updateModalCreditCard={closeModalCreditCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
