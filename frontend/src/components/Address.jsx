import { useState } from "react";

function Address({ adresse, handleChange, updateModal }) {
  const [formData, setFormData] = useState({ ...adresse });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateModal();
    handleChange(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse :
        <input
          type="text"
          name="adresse"
          value={formData.adresse}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Ville :
        <input
          type="text"
          name="ville"
          value={formData.ville}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Code Postal :
        <input
          type="text"
          name="codePostal"
          value={formData.codePostal}
          onChange={handleInputChange}
        />
      </label>

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default Address;
