const AbstractManager = require("./AbstractManager");

class AddressManager extends AbstractManager {
  constructor() {
    super({ table: "address" });
  }

  async getAddressbyId(id) {
    const [rows] = await this.database.query(
      `SELECT address.country, address.name_adress, address.number_street, address.zip_code, address.city 
      FROM ${this.table}
      JOIN address_has_user ON address.id = address_has_user.address_id
      JOIN user ON address_has_user.user_id = user.id
      WHERE address_has_user.user_id = ?`,
      [id]
    );
    return rows;
  }

  async addAddressbyId(address, userId) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (country, name_adress, number_street, zip_code, city) 
         VALUES (?, ?, ?, ?, ?)`,
        [
          address.country,
          address.name_adress,
          address.number_street,
          address.zip_code,
          address.city,
        ]
      );

      const addressId = result.insertId;

      // Insérer l'ID de l'adresse et l'ID de l'utilisateur dans la table de jointure address_has_user
      await this.database.query(
        `INSERT INTO address_has_user (address_id, user_id) 
         VALUES (?, ?)`,
        [addressId, userId]
      );

      return addressId;
    } catch (error) {
      console.error(error);
      throw error; // ou renvoyez une erreur appropriée selon votre logique de gestion des erreurs
    }
  }
}

module.exports = AddressManager;
