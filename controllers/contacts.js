// database connection
const mongodb = require("../data/database");
// unique id, the primaryKey
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("contacts").find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).json(contacts);
  });
};

const getSingle = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDatabase()
      .db()
      .collection("contacts")
      .findOne({ _id: contactId });

    if (result) {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(result);
    } else {
      res.status(404).send("Contact not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAll,
  getSingle,
};
