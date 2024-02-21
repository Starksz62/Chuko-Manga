import { useState } from "react";
import logo from "../assets/logo.png";
import "./PaymentPage.css";
import Order from "../components/Order";
import data from "../test.json";
import Address from "../components/Address";
import cross from "../assets/openModal.png";

function PaymentPage() {
  const paniers = data.commandes;
  const [showModal, setShowModal] = useState(false);
  const [adresse, setAdresse] = useState('');
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <div className="order-cards">
        {paniers.map((panier) => (
          <li key={panier.id}>
            <div className="cards">
              <Order panier={panier} />
            </div>
          </li>
        ))}
      </div>
      <div className="address-container">
        <h1>Adresse</h1>
        {adresse ? (
          <div className="address-info">
            <p>Adresse: {adresse.adresse}</p>
            <p>Ville: {adresse.ville}</p>
            <p>Code postal: {adresse.codePostal}</p>
          </div>
        ) : (
          <p>Ajouter une adresse</p>
        )}
        <img src={cross} onClick={openModal} alt="cross" />
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
      </div>
    </div>
  );
}

export default PaymentPage;
