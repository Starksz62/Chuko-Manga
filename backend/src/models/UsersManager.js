const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async getUserById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async getUserProfilById(id) {
    const [rows] = await this.database.query(
      `SELECT user.pseudo, user.email, user.phone, user.picture, address.country, feedback.rating
      FROM ${this.table} 
      JOIN feedback on user.id = feedback.user_id
      JOIN address_has_user on user.id = address_has_user.user_id
      JOIN address on address_has_user.address_id = address.id
      WHERE address_has_user.user_id = ?
      ORDER BY address.id ASC
      LIMIT 1`,
      [id]
    );
    return rows[0];
  }
}

module.exports = UsersManager;
