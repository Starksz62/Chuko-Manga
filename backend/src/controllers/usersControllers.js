const models = require("../modelsProviders");

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then((users) => res.json(users))
    .catch((err) => console.error(err));
};

const add = async (req, res) => {
  // Extract the item data from the request body
  const user = req.body;

  try {
    // Insert the item into the database
    const insertId = await models.user.create(user);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await models.user.getUserById(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
  }
};

const getUserProfilById = async (req, res) => {
  try {
    const user = await models.user.getUserProfilById(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
  }
};

const getUserProfilComById = async (req, res) => {
  try {
    const user = await models.user.getUserProfilComById(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAllUsers,
  add,
  getUserById,
  getUserProfilById,
  getUserProfilComById,
};
