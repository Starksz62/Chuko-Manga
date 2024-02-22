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

    // Return the array of items
    return rows;
  }
}

module.exports = MangasManager;
