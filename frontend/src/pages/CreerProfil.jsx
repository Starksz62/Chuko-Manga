import { useState } from "react";

function CreerProfil() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const handleEmailVisibilityToggle = () => {
    setIsEmailVisible(!isEmailVisible);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleEmailVisibilityToggle();
    }
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
        <label htmlFor="firstNameInput">ton prénom:</label>
        <input type="text" id="firstNameInput" placeholder="Votre prénom" />
      </div>
      <div>
        <label htmlFor="lastNameInput">ton nom:</label>
        <input type="text" id="lastNameInput" placeholder="Votre nom" />
      </div>
      <div>
        <label htmlFor="emailInput">email:</label>
        <input type="email" id="emailInput" placeholder="Votre email" />
        <div>
          {/* Квадратик и галочка для видимости email */}
          <div
            onClick={handleEmailVisibilityToggle}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
          >
            {isEmailVisible ? "✔️" : "□"}
          </div>
          <p>Rendre visible sur le profil</p>
        </div>
      </div>
      <button type="button">CREER</button>
    </div>
  );
}

export default CreerProfil;
