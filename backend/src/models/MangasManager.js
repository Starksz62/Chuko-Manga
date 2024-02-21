const AbstractManager = require("./AbstractManager");

class MangasManager extends AbstractManager {
  constructor() {
    super({ table: "manga" });
  }
}

module.exports = MangasManager;
