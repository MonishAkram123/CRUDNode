const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("<h1 align='center'>Welcom to CRUDNode</h1>");
});

module.exports = router;
