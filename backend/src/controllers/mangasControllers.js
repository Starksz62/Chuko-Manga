const models = require("../modelsProviders");

const getAllMangas = (req, res) => {
  models.manga
    .getMangaData()
    .then((mangas) => res.json(mangas))
    .catch((err) => console.error(err));
};
const getMangaById = async (req, res) => {
  try {
    const manga = await models.manga.getMangaById(req.params.id);
    if (manga == null) {
      res.sendStatus(404);
    } else {
      res.json(manga);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllMangas,
  getMangaById,
};
