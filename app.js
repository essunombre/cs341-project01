console.log("holas");

const mongodb = require("./data/database");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// node empieza en /, se va a routes
app.use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listen and node Running in port ${port}`);
    });
  }
});
