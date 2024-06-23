const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

router.get("/", contactsController.getAll);

router.get("/:id", contactsController.getSingle);

// Create
router.post("/", contactsController.createContact);

// Update
router.put("/:id", contactsController.updateContact);

router.delete("/:id", contactsController.deleteContact)

module.exports = router;