const express = require("express");
const router = express.Router();

const mainMenuController = require("../controllers/mainMenuController");

router.route("/").get(mainMenuController.getAll);

module.exports = router;
