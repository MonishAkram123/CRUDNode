// Environment to load
process.env.NODE_ENV = "testing";

const express = require("express");
const hbs = require("hbs");
const config = require("./config/config.js");
const constants = require("./constants/application.json");
const routers = require("./routes/");

var gConfig = global.gConfig

const app = express();

app.use(express.static(__dirname +"/public/"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname +"/views/partials/");

app.use(constants.routes.MAIN, routers);

app.listen(gConfig.node_port, ()=> {
  console.log(`Application is listening on Port: ${gConfig.node_port}`);
})
