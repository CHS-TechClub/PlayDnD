const express = require("express");
const app = express();
const ejs = require("ejs")
const port = process.env.PORT || 8080;
const config = require("./config.json");
const DatabaseManager = require("./utils/DatabaseManager");
const databaseManager = new DatabaseManager(config.mysql.username, config.mysql.password);

app.enable('verbose errors');
require('events').EventEmitter.defaultMaxListeners = 0;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
})

app.listen(port);
