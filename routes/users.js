const express = require("express");
// router is like a mini app that lives inside my app de express
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("User New Form");
});

module.exports = router;
