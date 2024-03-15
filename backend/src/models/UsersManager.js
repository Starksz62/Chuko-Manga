const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  async getUserById(id) {
    const [rows] = await this.database.query(
      `SELECT firstname , lastname, pseudo, email, phone, picture FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async getUserProfilById(id) {
    const [rows] = await this.database.query(
      `SELECT user.lastname, user.firstname, user.pseudo, user.email, user.phone, user.picture, address.country, 
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

  async updateUser(user) {
    const { id, firstname, lastname, email, phone, picture, pseudo } = user;
    const [result] = await this.database.query(
      `UPDATE user SET firstname = ?, lastname = ?, email = ?, phone = ?, picture = ?, pseudo = ? WHERE id = ?`,
      [firstname, lastname, email, phone, picture, pseudo, id]
    );
    return result;
  }

  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await this.database.query(
      `insert into user (pseudo, email, hashed_password) values (?, ?, ?)`,
      [user.pseudo, user.email, user.hashedPassword]
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from user where email = ?`,
      [email]
    );

    // Return the first row of the result, which represents the user
    return rows[0];
  }
}

module.exports = UsersManager;
