const models = require("../modelsProviders");

const getAllMangas = (req, res) => {
  models.manga
    .getMangaData()
    .then((mangas) => res.json(mangas))
    .catch((err) => console.error(err));
};

module.exports = {
  getAllMangas,
};
