// Environment to load
process.env.NODE_ENV = "testing";
const bodyParser = require("body-parser");
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const config = require("./config/config.js");
const constants = require("./constants/application.json");
const routers = require("./routes/");
const dbKeys = require("./config/keys.json");

var gConfig = global.gConfig
var dbConfig = dbKeys.database[gConfig.db];
var mongoUri = `mongodb://${dbConfig.user}:${dbConfig.pwd}`
              +`@${dbConfig.host}/${dbConfig.db_name}`;

mongoose.set('useNewUrlParser', true);

mongoose.connect(mongoUri)
.then(() => {
  console.log("Connected to database");
})
.catch(err => {
  console.log("Error while Connecting to database:", err);
});


const app = express();

app.use(express.static(__dirname +"/public/"));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
hbs.registerPartials(__dirname +"/views/partials/");

app.use(constants.routes.MAIN, routers);

app.listen(gConfig.node_port, ()=> {
  console.log(`Application is listening on Port: ${gConfig.node_port}`);
})
