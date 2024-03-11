const models = require("../modelsProviders");

const getAddressbyId = async (req, res) => {
  try {
    const user = await models.address.getAddressbyId(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
  }
};

const addAddressbyId = async (req, res) => {
  try {
    const address = await models.address.addAddressbyId(req.params.id);
    res.status(201).json({ address });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getAddressbyId,
  addAddressbyId,
};
