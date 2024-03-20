/* eslint-disable import/no-unresolved */
const Joi = require("joi");

const advertSchema = Joi.object({
  title_search_manga: Joi.string().max(40).required(),
  description: Joi.string().max(255).required(),
  article_condition_id: Joi.number().required(),
  price: Joi.number().required(),
  manga_id: Joi.number(),
  volume_id: Joi.number(),
  batch: Joi.number().required(),
  alert: Joi.number().required(),
  publication_date_advert: Joi.date().required(),
  user_id: Joi.number().required(),
});

const validateAdvert = (req, res, next) => {
  const {
    // eslint-disable-next-line camelcase
    title_search_manga,
    description,
    price,
    // eslint-disable-next-line camelcase
    article_condition_id,
    // eslint-disable-next-line camelcase
    manga_id,
    // eslint-disable-next-line camelcase
    volume_id,
    batch,
    alert,
    // eslint-disable-next-line camelcase
    publication_date_advert,
    // eslint-disable-next-line camelcase
    user_id,
  } = req.body;
  const { error } = advertSchema.validate(
    {
      // eslint-disable-next-line camelcase
      title_search_manga,
      description,
      price,
      // eslint-disable-next-line camelcase
      article_condition_id,
      // eslint-disable-next-line camelcase
      manga_id,
      // eslint-disable-next-line camelcase
      volume_id,
      batch,
      alert,
      // eslint-disable-next-line camelcase
      publication_date_advert,
      // eslint-disable-next-line camelcase
      user_id,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
    error.details.forEach((errorItem) => {
      console.info("Error list :", errorItem.message);
    });
  } else {
    console.info("Data validated successfully:", req.body);
    next();
  }
};

module.exports = validateAdvert;
