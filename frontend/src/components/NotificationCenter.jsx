import React, { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { formatDistanceToNow } from "date-fns";
import "./NotificationCenter.css";

// eslint-disable-next-line no-unused-vars
function NotificationCenter({ setIsVisible, notifications, setNotifications }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(3);

  const addNotification = (message) => {
    const newNotification = {
      id: Date.now(),
      message,
      timestamp: new Date(),
    };
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      newNotification,
    ]);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleDeleteAll = () => {
    setNotifications([]);
    setIsPopupVisible(false);
  };

  const handleViewAll = () => {
    setVisibleNotifications(notifications.length);
  };

  const handleAddFavori = () => {
    addNotification("Quelqu'un a mis votre article en favori");
  };

  const handleAddVente = () => {
    addNotification("Un de vos articles favoris a été vendu");
  };

  return (
    <div className="notification-wrapper">
      {isPopupVisible && (
        <div className="popup">
          <button
            type="button"
            className="popup-option"
            onClick={handleDeleteAll}
          >
            Tout supprimer
          </button>
          <button
            type="button"
            className="popup-option"
            onClick={() => setIsPopupVisible(false)}
          >
            Annuler
          </button>
        </div>
      )}

      <div className={`notification-center ${isPopupVisible ? "blurred" : ""}`}>
        <button
          type="button"
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        >
          Modifier
        </button>

        <h4>Centre de Notifications</h4>
        <div
          className={`notifications-list ${isPopupVisible ? "blurred" : ""}`}
        >
          {notifications
            .slice(0, visibleNotifications)
            .map(({ id, message, timestamp }) => (
              <div key={id} className="notification-item">
                {message}
                <div className="notification-time-wrapper">
                  <span className="notification-time">
                    {formatDistanceToNow(new Date(timestamp), {
                      addSuffix: true,
                    })}
                  </span>
                  <button
                    className="button-supp"
                    type="button"
                    onClick={() => removeNotification(id)}
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}
        </div>

        {notifications.length > 3 &&
          visibleNotifications < notifications.length && (
            <div className="view-all-container">
              <button
                type="button"
                className="view-all-button"
                onClick={handleViewAll}
              >
                Voir tout
              </button>
            </div>
          )}
      </div>

      <button type="button" onClick={handleAddFavori}>
        Ajouter Favori
      </button>
      <button type="button" onClick={handleAddVente}>
        Ajouter Vente
      </button>
    </div>
  );
}

NotificationCenter.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      timestamp: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};

export default NotificationCenter;
