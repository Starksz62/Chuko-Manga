const models = require("../modelsProviders");

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then((users) => res.json(users))
    .catch((err) => console.error(err));
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

module.exports = {
  getAllUsers,
  getUserById,
  getUserProfilById,
};
