/* eslint-disable prettier/prettier */
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


const getAdvertsImage = async (req, res) => {
  try {
    const adverts = await models.advert.getAdvertsImage(req.params.image_path);
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
  const advert = req.body;
  try {
    const insertId = await models.advert.addAdvert(advert);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
  }
};

const getSearchAdverts = async (req, res) => {
  try {
    // Extract ID from the request
    const userQuery = req.params.query;
    console.info(`Controller Search query: ${userQuery}`);
    // Check if the item exists based on the ID
    const advert = await models.advert.findAdvertQuery(userQuery);
    // If the advert is not found, respond with HTTP 404 (Not Found)
    if (advert != null) {
      res.json(advert);
      console.info(advert);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    console.error(err);
  }
};
const recentAdverts = async (req, res) => {
  const { batch, genreId, conditionName, minPrice, maxPrice } = req.query;
  const isBatch = batch === 'true';

  try {
    const adverts = await models.advert.findAdverts({
      batch: isBatch,
      genreId,
      conditionName,
      minPrice,
      maxPrice
    });

    return res.json(adverts);
  } catch (error) {
    console.error("Erreur lors de la récupération des annonces récentes:", error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
};
const getAdvertsByPrice = async (req, res) => {
  const { batch } = req.query; 
  const isBatch = batch === 'true';
  try {
    const priceRange = await models.advert.getMinMaxPrice(isBatch);

    if (priceRange.length > 0) {
      return res.json(priceRange[0]);
    } 
      return res.status(404).json({ message: "Aucune annonce trouvée." });
    
  } catch (error) {
    console.error("Erreur lors de la récupération des prix min et max:", error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
};
module.exports = {
  getAllAdverts,
  getAllCards,
  recentAdverts,
  getRecentUniqueAdverts,
  getRecentBatch,
  getSearchAdverts,
  getAdvertById,
  getAdvertsBySeller,
  getAdvertsByGenre,
  getAdvertsByCondition,
  getAdvertsByPrice,
  addAdvert,
  getAdvertsImage
};
