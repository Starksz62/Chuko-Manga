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

const getAdvertsByCondition = async (req, res) => {
  try {
    const adverts = await models.advert.getAdvertsByCondition(req.params.id);
    if (adverts == null) {
      res.sendStatus(404);
    } else {
      res.json(adverts);
    }
  } catch (err) {
    console.error(err);
  }
};

const getAdvertsByPrice = async (req, res) => {
  try {
    const adverts = await models.advert.getAdvertsByPrice(req.params.price);
    if (adverts == null) {
      res.sendStatus(404);
    } else {
      res.json(adverts);
    }
  } catch (err) {
    console.error(err);
  }
};

const getSearchAdverts = async (req, res) => {
  try {
    // Extract ID from the request
    const userQuery = req.params.query;

    console.info("je suis le controller", userQuery);

    // Check if the item exists based on the ID
    const advert = await models.advert.findAdvertQuery(userQuery);

    // If the advert is not found, respond with HTTP 404 (Not Found)

    if (advert == null) {
      res.sendStatus(404);
    } else {
      res.json(advert);
      console.info(advert);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};

module.exports = {
  getAllAdverts,
  getAllCards,
  getRecentUniqueAdverts,
  getRecentBatch,
  getSearchAdverts,
  getAdvertById,
  getAdvertsBySeller,
  getAdvertsByGenre,
  getAdvertsByCondition,
  getAdvertsByPrice,
};
