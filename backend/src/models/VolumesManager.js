const AbstractManager = require("./AbstractManager");

class VolumesManager extends AbstractManager {
  constructor() {
    super({ table: "volume" });
  }

  async getVolumesByMangaId(mangaId) {
    const [rows] = await this.database.query(
      `SELECT volume.id, volume.title, volume.number_volume, volume.publication_year, volume.image, volume.ISBN, volume.manga_id
       FROM volume
       WHERE volume.manga_id = ?
       ORDER BY volume.number_volume ASC`,
      [mangaId]
    );
    return rows;
  }
}

module.exports = VolumesManager;
