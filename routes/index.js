// joseDeveloper Dandopapaya
// connection string
// mongodb+srv://joseDeveloper:<password>@contactsproject.rnwhls2.mongodb.net/

// this allows me to handle routes

const router = require("express").Router();
router.use("/", require("./swagger"));

// anonumous funciton with req and res
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/contacts", require("./contacts"));

module.exports = router;
