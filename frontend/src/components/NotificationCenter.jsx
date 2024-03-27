import React, { useState } from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { formatDistanceToNow } from "date-fns";
import "./NotificationCenter.css";
import { useNotifications } from "../context/NotificationContext";

// eslint-disable-next-line no-unused-vars
function NotificationCenter({ setIsVisible }) {
  const { notifications, removeNotification } = useNotifications();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [visibleNotifications, setVisibleNotifications] = useState(3);

  const handleDeleteAll = () => {
    notifications.forEach((notification) =>
      removeNotification(notification.id)
    );
    setIsPopupVisible(false);
  };

  const handleViewAll = () => {
    setVisibleNotifications(notifications.length);
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
          className="modification-button"
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
            .map(({ id, message, timestamp, image }) => (
              <article key={id} className="notification-item">
                <div className="content-row">
                  {image && (
                    <img
                      src={image}
                      alt="Notification"
                      className="notification-image"
                    />
                  )}
                  <p className="notification-text">{message}</p>
                </div>
                <div className="notification-time-wrapper">
                  <time className="notification-time">
                    {formatDistanceToNow(new Date(timestamp), {
                      addSuffix: true,
                    })}
                  </time>
                  <button
                    className="button-supp"
                    type="button"
                    onClick={() => removeNotification(id)}
                  >
                    ✖
                  </button>
                </div>
              </article>
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
    </div>
  );
}

NotificationCenter.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default NotificationCenter;
