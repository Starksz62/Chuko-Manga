/* eslint-disable import/no-unresolved */

import { useState } from "react";
import logo from "../assets/logo.png";
import "./PaymentPage.css";
import Order from "../components/Order";
import CreditCard from "../components/creditCard";
import data from "../test.json";
import Address from "../components/Address";
import cross from "../assets/openModal.png";
import Payment from "../components/Payment";
import DeliveryOption from "../components/DeliveryOption";

function PaymentPage() {
  const prices = data.commandes;

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
    setShowModalCreditCard(false);
  };
  const handleAddressChange = (newAddress) => {
    setAdresse(newAddress);
  };
  return (
    <div className="container">
      <div className="navbar-payment">
        <img src={logo} alt="logo-site" />
        <h1 className="title-navbar-payment">Commande</h1>
      </div>
      <h2>Commande</h2>
      <div className="main-content">
        <div className="left-column">
          <ul className="order-cards">
            {prices.map((allData) => (
              <li key={allData.id} className="card-item">
                <Order price={allData} />
              </li>
            ))}
          </ul>
        </div>
        <div className="right-column">
          <Payment price={prices[0].price} />
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
          <button
            onClick={openModalCreditCard}
            aria-label="Close modal"
            type="button"
          >
            <img src={cross} alt="cross" />
          </button>
        </div>

        <p>Sélectionne le mode de paiement</p>
      </div>
      {showModalCreditCard && (
        <div className="modal">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={closeModalCreditCard}
            >
              <span className="close">&times;</span>
            </button>

            <CreditCard updateModalCreditCard={closeModalCreditCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
