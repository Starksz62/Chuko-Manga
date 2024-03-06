const models = require("../modelsProviders");

const getAllVolumes = async (req, res) => {
  const { mangaId } = req.query;

  if (!mangaId) {
    return res.status(400).send("ID du manga manquant");
  }

  try {
    const volumes = await models.volume.findAll({
      where: { mangaId },
    });
    return res.json(volumes);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erreur interne du serveur");
  }
};

module.exports = {
  getAllVolumes,
};
