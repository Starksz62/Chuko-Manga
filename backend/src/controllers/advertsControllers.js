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

// NOUVEL ESSAI
const createAdvert = async (req, res) => {
  // console.info("image1 uploaded:", req.files["image1"][0]);
  // console.info("image2 uploaded:", req.files["image2"][0]);
  // console.info("image3 uploaded:", req.files["image3"][0]);
  const advert = req.body;
  // console.info("this is advert", advert);
  const imageId = [];
  let imageId1 = null;
  let imageId2 = null;
  let imageId3 = null;
  try {
    const advertId = await models.advert.addAdvert(advert);
    if (advertId !== null) {
      if (req.files.image1) {
        imageId1 = await models.advert_image.addImage({
          advert_id: advertId,
          image_path: `/static/${req.files.image1[0].filename}`,
          is_primary: 1,
        });
        imageId.push(imageId1);
      }
      if (req.files.image2) {
        imageId2 = await models.advert_image.addImage({
          advert_id: advertId,
          image_path: `/static/${req.files.image2[0].filename}`,
          is_primary: 0,
        });
        imageId.push(imageId2);
      }
      if (req.files.image3) {
        imageId3 = await models.advert_image.addImage({
          advert_id: advertId,
          image_path: `/static/${req.files.image3[0].filename}`,
          is_primary: 0,
        });
        imageId.push(imageId3);
      }
    } else {
      res.status(500).json({ error: "Failed to create advert" });
    }
    if (advertId !== null || imageId !== null) {
      res.status(201).json({ advertId, imageId });
    }
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
  createAdvert,
  getAdvertsImage,
};
