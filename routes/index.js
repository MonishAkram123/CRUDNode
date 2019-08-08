const express = require("express");
const envRoutes = require("./env.js");
const constants = require("../constants/application.json");

const router = express.Router();
const routes = constants.routes;

router.use(routes.ENVIRONMENT, envRoutes);

module.exports = router;
