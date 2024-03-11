const models = require("../modelsProviders");

const getHistoryOrderByBuyer = async (req, res) => {
  try {
    const order = await models.order.getHistoryOrderByBuyer(req.params.id);
    if (order == null) {
      res.sendStatus(404);
    } else {
      res.json(order);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getHistoryOrderByBuyer,
};
