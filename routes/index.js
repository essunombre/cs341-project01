// this allows me to handle routes

const router = require("express").Router();

// anonumous funciton with req and res
router.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = router;