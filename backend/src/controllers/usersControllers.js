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
    console.error(err);
  }
};

module.exports = {
  getAllUsers,
  add,
};
