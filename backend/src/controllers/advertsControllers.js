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

const addAdvert = async (req, res) => {
  // Extract the advert data from the request body
  const advert = req.body;

  try {
    // Insert the advert into the database
    const insertId = await models.advert.addAdvert(advert);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
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
  getAdvertById,
  getAdvertsBySeller,
  getAdvertsByGenre,
  getAdvertsByCondition,
  getAdvertsByPrice,
  addAdvert,
};
