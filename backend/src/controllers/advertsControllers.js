const models = require("../modelsProviders");

const getAllAdverts = (req, res) => {
  models.advert
    .findAll()
    .then((adverts) => res.json(adverts))
    .catch((err) => console.error(err));
};

const getAllCards = (req, res) => {
  models.advert
    .findCards()
    .then((cards) => res.json(cards))
    .catch((err) => console.error(err));
};

const getRecentUniqueAdverts = (req, res) => {
  models.advert
    .findRecentUniqueItems()
    .then((cards) => res.json(cards))
    .catch((err) => console.error(err));
};

const getRecentBatch = (req, res) => {
  models.advert
    .findRecentBatch()
    .then((cards) => res.json(cards))
    .catch((err) => console.error(err));
};

const getAdvertById = async (req, res) => {
  try {
    const advert = await models.advert.getAdvertById(req.params.id);
    if (advert == null) {
      res.sendStatus(404);
    } else {
      res.json(advert);
    }
  } catch (err) {
    console.error(err);
  }
};

const getAdvertsBySeller = async (req, res) => {
  try {
    const adverts = await models.advert.getAdvertsBySeller(req.params.id);
    if (adverts == null) {
      res.sendStatus(404);
    } else {
      res.json(adverts);
    }
  } catch (err) {
    console.error(err);
  }
};

const getAdvertsByGenre = async (req, res) => {
  try {
    const adverts = await models.advert.getAdvertsByGenre(req.params.id);
    if (adverts == null) {
      res.sendStatus(404);
    } else {
      res.json(adverts);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllAdverts,
  getAllCards,
  getRecentUniqueAdverts,
  getRecentBatch,
  getAdvertById,
  getAdvertsBySeller,
  getAdvertsByGenre,
};
