console.log("holas");

const mongodb = require("./data/database");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const userRouter = require("./routes/users");
const port = process.env.PORT || 3000;

// node empieza en /, se va a routes
app.use(bodyParser.json());

// routes will work across sites
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

// Routes
app.use("/", require("./routes"));

// con use, yo le asigno como quiero que vaya el path
app.use("/users", userRouter);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listen and node Running in port ${port}`);
    });
  }
});
