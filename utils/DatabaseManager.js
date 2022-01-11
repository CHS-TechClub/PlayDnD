const mysql = require("mysql");

class DatabaseManager {
  #connection;

  constructor(username, password) {
    this.#connection = mysql.createConnection({
      host: "localhost",
      user: username,
      password: password,
      database: "dnd"
    });
    console.log("[DatabaseManager] Database connection established!");
    this.#initializeTables();
  }

  #initializeTables() {

  }

}

module.exports = DatabaseManager;
