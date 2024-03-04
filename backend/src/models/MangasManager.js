const AbstractManager = require("./AbstractManager");

class MangasManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }

  async getMangaById(id) {
    const [rows] = await this.database.query(
      `SELECT manga.id, manga.title, manga.description, manga.image, manga.author, manga.script_writer, manga.illustrator, manga.release_date, manga.publishing_house_id, manga.genre_id, manga.finish_japan, manga.finish_france, manga.date_france, manga.date_japan
      FROM ${this.table}
      WHERE manga.id = ?`,
      [id]
    );
    return rows[0];
  }

  async getMangaData() {
    const [rows] = await this.database
      .query(`SELECT m.title, m.description, m.image, p.name_publishing_house, g.genre, m.author, m.script_writer, m.illustrator, m.release_date, m.date_japan, m.date_france
      FROM manga m
      LEFT JOIN publishing_house p ON m.publishing_house_id = p.id
      LEFT JOIN genre g ON m.genre_id = g.id;`);
    return rows;
  }
}

module.exports = MangasManager;
