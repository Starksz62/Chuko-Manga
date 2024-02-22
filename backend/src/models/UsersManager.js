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
      `SELECT user.pseudo, user.email, user.phone, user.picture, address.country, 
      (SELECT AVG(feedback.rating) FROM feedback WHERE user_id = ?) AS average_rating
      FROM ${this.table} 
      JOIN address_has_user on user.id = address_has_user.user_id
      JOIN address on address_has_user.address_id = address.id
      WHERE address_has_user.user_id = ?
      ORDER BY address.id ASC
      LIMIT 1`,
      [id, id]
    );
    return rows[0];
  }
}

module.exports = UsersManager;
