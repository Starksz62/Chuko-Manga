import { useState } from "react";

function notificationCenter() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const id = new Date().getTime();
    setNotifications((prev) => [...prev, { id, message }]);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid black",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <h4>Centre de Notifications</h4>
        {notifications.length === 0 ? (
          <p>Aucune notification pour le moment.</p>
        ) : (
          notifications.map(({ id, message }) => (
            <div
              key={id}
              style={{
                background: "#f0f0f0",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {message}
              {/* Bouton pour supprimer une notification */}
              <button
                type="button"
                onClick={() => removeNotification(id)}
                style={{ marginLeft: "10px" }}
              >
                Supprimer
              </button>
            </div>
          ))
        )}
      </div>
      {/* Boutons pour simuler l'ajout de notifications */}
      <button
        type="button"
        onClick={() =>
          addNotification("Quelqu'un a mis votre article en favori")
        }
        style={{ marginTop: "20px", marginRight: "5px" }}
      >
        Simuler Favori
      </button>
      <button
        type="button"
        onClick={() =>
          addNotification("Un de vos articles favoris a été vendu")
        }
        style={{ marginTop: "20px" }}
      >
        Simuler Vente
      </button>
    </div>
  );
}

export default notificationCenter;
