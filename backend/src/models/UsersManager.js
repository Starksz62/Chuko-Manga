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
    return rows;
  }

  async getUserProfilComById(id) {
    const [rows] = await this.database.query(
      `SELECT u.pseudo, u.picture AS picture_buyer, f.user_id, f.created_on, f.user_buyer, f.rating, f.\`comment\`, 
      (SELECT AVG(feedback.rating) FROM feedback WHERE user_id = ?) AS average_rating
       FROM feedback as f
      INNER JOIN user as u ON f.user_buyer = u.id
      WHERE user_id=?;`,
      [id, id]
    );
    return rows;
  }
}

module.exports = UsersManager;
