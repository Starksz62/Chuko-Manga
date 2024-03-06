const AbstractManager = require("./AbstractManager");

class VolumesManager extends AbstractManager {
  constructor() {
    super({ table: "volume" });
  }

  async getVolumesByMangaId(mangaId) {
    const [rows] = await this.database.query(
      `SELECT volumes.id, volumes.title, volumes.release_date, volumes.manga_id
       FROM volumes
       WHERE volumes.manga_id = ?
       ORDER BY volumes.release_date ASC`,
      [mangaId]
    );

    return rows;
  }
}

module.exports = VolumesManager;
