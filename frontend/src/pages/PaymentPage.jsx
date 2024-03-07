/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css";
import Order from "../components/PaymentPage/Order";
import CreditCard from "../components/PaymentPage/creditCard";
import Address from "../components/PaymentPage/Address";
import Payment from "../components/PaymentPage/Payment";
import DeliveryOption from "../components/PaymentPage/DeliveryOption";

function PaymentPage() {
  const location = useLocation();
  const { articleData } = location.state;
  console.info("info paymentPage", articleData);
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
      <div className="main-content">
        <div className="left-column">
          <h3>Commande</h3>
          <div className="order-cards">
            <Order articleInfo={articleData} />
          </div>
          <div className="address-container">
            <h3 className="section-title">Adresse</h3>
            {adresse.adresse && adresse.ville && adresse.codePostal ? (
              <div className="address-info">
                <p>Adresse: {adresse.adresse}</p>
                <p>Ville: {adresse.ville}</p>
                <p>Code postal: {adresse.codePostal}</p>
                <div className="address-actions">
                  <span className="plus-icon">+</span>
                  <p className="edit-address-text" onClick={openModal}>
                    modifie ton adresse
                  </p>
                </div>
              </div>
            ) : (
              <div className="add-address" onClick={openModal}>
                <span className="add-address-text">Ajoute ton adresse</span>
                <span className="plus-icon">+</span>
              </div>
            )}
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
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
          <DeliveryOption />
          <div className="payment-section">
            <h3>Paiement</h3>
            <div className="payment-method-add" onClick={openModalCreditCard}>
              <span>Ajoute une méthode de paiement</span>
              <span className="plus-icon">+</span>
            </div>
            <div className="payment-method-select">
              <span>Sélectionne le mode paiement</span>
            </div>
          </div>
          {showModalCreditCard && (
            <div className="modal">
              <div className="modal-content">
                <CreditCard updateModalCreditCard={closeModalCreditCard} />
              </div>
            </div>
          )}
        </div>
        <div className="right-column">
          <Payment price={articleData.price} />
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
