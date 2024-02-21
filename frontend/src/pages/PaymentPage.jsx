import { useState } from "react";
import logo from "../assets/logo.png";
import "./PaymentPage.css";
import Order from "../components/Order";
import data from "../test.json";
import Address from "../components/Address";
import cross from "../assets/openModal.png";
import Payment from "../components/Payment";

function PaymentPage() {
  const paniers = data.commandes;
  const [showModal, setShowModal] = useState(false);
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
            {paniers.map((panier) => (
              <li key={panier.id} className="card-item">
                <Order panier={panier} />
              </li>
            ))}
          </ul>
        </div>
        <div className="right-column">
          <Payment />
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
          <div className="cross-icon">
            <img src={cross} onClick={openModal} alt="cross" />
            <p>modifie ton adresse</p>
          </div>
        ) : (
          <div className="cross-icon">
            <img src={cross} onClick={openModal} alt="cross" />
            <p>ajoute une adresse</p>
          </div>
        )}
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
