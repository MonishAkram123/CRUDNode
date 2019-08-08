const express = require("express");
const constants = require("../constants/application.json");

const router = express.Router();
const routes = constants.routes;

router.get("/", (req, res) => {
  res.send(global.gConfig);
});

module.exports = router;
