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

// SEARCH

// const getSearchAdverts = (req, res) => {
//   models.advert.
//     .findAdvertQuery()
//     .then((search) => res.json(search))
//     .catch((err) => console.error(err));
// };

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
// if (!advert) {
//   return res.sendStatus(404);
// }

//   // If the item is found, proceed with the search logic
//   models.advert
//     .findAdvertQuery()
//     .then((search) => res.json(search))
//     .catch((err) => console.error(err));
// } catch (err) {
//   // Pass any errors to the error-handling middleware
//   console.error(err);
//   res.sendStatus(500); // Internal Server Error
// }

module.exports = {
  getAllAdverts,
  getAllCards,
  getRecentUniqueAdverts,
  getRecentBatch,
  getSearchAdverts,
};
