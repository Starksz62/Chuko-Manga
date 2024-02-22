/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";

function CreerProfil() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const handleEmailVisibilityToggle = () => {
    setIsEmailVisible(!isEmailVisible);
  };

  return (
    <div>
      <h1>Créé ton profil</h1>
      <div>
        <p>ta photo de profil</p>
        <div>
          {/* Круг с крестиком для добавления фото */}
          {/* Замените следующую строку на ваш компонент для загрузки фото */}
          <input type="file" accept="image/*" />
        </div>
      </div>
      <div>
        <label>ton prénom:</label>
        <input type="text" placeholder="Votre prénom" />
      </div>
      <div>
        <label>ton nom:</label>
        <input type="text" placeholder="Votre nom" />
      </div>
      <div>
        <label>email:</label>
        <input type="email" placeholder="Votre email" />
        <div>
          {/* Квадратик и галочка для видимости email */}
          <div onClick={handleEmailVisibilityToggle}>
            {isEmailVisible ? "✔️" : "□"}
          </div>
          <p>Rendre visible sur le profil</p>
        </div>
      </div>
      <button>CREER</button>
    </div>
  );
}

export default CreerProfil;
