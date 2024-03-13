import React, { useState } from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { formatDistanceToNow } from "date-fns";

import "./NotificationCenter.css";
import NotificationBellIcon from "../assets/notificationBell.png";

function NotificationCenter() {
  const [notifications, setNotifications] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(3); // Gère le nombre de notifications visibles

  const handleDeleteAll = () => {
    setNotifications([]);
    setIsPopupVisible(false);
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const addNotification = (message) => {
    const notification = {
      id: new Date().getTime(),
      message,
      timestamp: new Date(),
    };
    setNotifications((prev) => [...prev, notification]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const handleViewAll = () => {
    setVisibleNotifications(10);
  };

  return (
    <div className="notification-wrapper">
      <div
        className="notification-icon-wrapper"
        onClick={() => setIsVisible(!isVisible)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsVisible(!isVisible);
          }
        }}
        role="button"
        tabIndex="0"
        aria-label="Notifications"
      >
        <img
          src={NotificationBellIcon}
          alt="notificationBell"
          className="notification-bell"
        />
        {notifications.length > 0 && (
          <span className="notification-count">{notifications.length}</span>
        )}
      </div>

      {isVisible && (
        <>
          <div
            role="button"
            tabIndex="0"
            className="overlay"
            onClick={() => setIsVisible(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsVisible(false);
              }
            }}
            aria-label="Fermer le centre de notifications"
          />
          <div
            className={`notification-center ${isPopupVisible ? "blurred" : ""}`}
            onMouseLeave={() => setVisibleNotifications(3)}
          >
            <button type="button" className="edit-link" onClick={togglePopup}>
              Modifier
            </button>

            {isPopupVisible && (
              <div className="popup">
                <button
                  type="button"
                  className="popup-option"
                  onClick={handleDeleteAll}
                >
                  Tout supprimer
                </button>
                <hr />
                <button
                  type="button"
                  className="popup-option"
                  onClick={handleCancel}
                >
                  Annuler
                </button>
              </div>
            )}

            <div
              className={`notifications-list ${isPopupVisible ? "blurred" : ""}`}
            >
              <h4>Centre de Notifications</h4>
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
                      <hr />
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

            {notifications.length > 3 && visibleNotifications < 10 && (
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
        </>
      )}

      <button
        type="button"
        onClick={() =>
          addNotification("Quelqu'un a mis votre article en favori")
        }
      >
        Favori
      </button>
      <button
        type="button"
        onClick={() =>
          addNotification("Un de vos articles favoris a été vendu")
        }
      >
        Vente
      </button>
    </div>
  );
}

export default NotificationCenter;
