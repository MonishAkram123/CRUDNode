const express = require("express");
const adminRoutes = require("./admin/");
const envRoutes = require("./env.js");
const homeRoutes = require("./home.js");
const constants = require("../constants/application.json");

const router = express.Router();
const routes = constants.routes;

router.use(routes.ADMIN, adminRoutes);
router.use(routes.ENVIRONMENT, envRoutes);
router.use(routes.HOME, homeRoutes);

router.get(routes.MAIN, (req, res) => {
  res.redirect(routes.ENVIRONMENT);
})

module.exports = router;
