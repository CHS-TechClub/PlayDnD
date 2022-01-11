const Route = require("./Route");

class VerifiedRoute extends Route {

  constructor(databaseManager) {
    super(databaseManager);
  }

  registerMiddleware() {

  }

}

module.exports = VerifiedRoute;
