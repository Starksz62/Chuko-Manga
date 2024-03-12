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
    res.status(500).send("Internal Server Error");
  }
};

const getCatalogMangas = async (req, res) => {
  try {
    const manga = await models.manga.getMangaOverview();
    console.info("Resultat envoyés au client :", manga);
    if (!manga || manga.length === 0) {
      return res.status(404).send("Aucun manga trouvé.");
    }
    return res.json(manga);
  } catch (err) {
    console.error("Erreur lors de la récupération des mangas : ", err);
    return res
      .status(500)
      .send(
        "Internal Server Error - Unable to retrieve mangas basic information"
      );
  }
};

module.exports = {
  getAllMangas,
  getMangaById,
  getCatalogMangas,
};
