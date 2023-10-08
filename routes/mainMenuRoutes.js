const express = require("express");
const router = express.Router();

const mainMenuController = require("../controllers/mainMenuController");

// Every Array
router.route("/get-every-array").get(mainMenuController.getEveryArray);

// Starters
router.route("/starters").get(mainMenuController.getAllStarters);
router.route("/starters/:id").patch(mainMenuController.updateOneStarter);
router.route("/starters/:id").delete(mainMenuController.deleteOneStarter);
router.route("/starters").post(mainMenuController.createOneStarter);

// Sharers
router.route("/sharers").get(mainMenuController.getAllSharers);
router.route("/sharers/:id").patch(mainMenuController.updateOneSharer);
router.route("/sharers/:id").delete(mainMenuController.deleteOneSharer);
router.route("/sharers").post(mainMenuController.createOneSharer);

// Mains
router.route("/mains").get(mainMenuController.getAllMains);
router.route("/mains/:id").patch(mainMenuController.updateOneMain);
router.route("/mains/:id").delete(mainMenuController.deleteOneMain);
router.route("/mains").post(mainMenuController.createOneMain);

// Salads
router.route("/salads").get(mainMenuController.getAllSalads);
router.route("/salads/:id").patch(mainMenuController.updateOneSalad);
router.route("/salads/:id").delete(mainMenuController.deleteOneSalad);
router.route("/salads").post(mainMenuController.createOneSalad);

// Steaks
router.route("/steaks").get(mainMenuController.getAllSteaks);
router.route("/steaks/:id").patch(mainMenuController.updateOneSteak);
router.route("/steaks/:id").delete(mainMenuController.deleteOneSteak);
router.route("/steaks").post(mainMenuController.createOneSteak);

// Steak Sides
router.route("/steak-sides").get(mainMenuController.getAllSteakSides);
router.route("/steak-sides/:id").patch(mainMenuController.updateOneSteakSide);
router.route("/steak-sides/:id").delete(mainMenuController.deleteOneSteakSide);
router.route("/steak-sides").post(mainMenuController.createOneSteakSide);

// Burgers
router.route("/burgers").get(mainMenuController.getAllBurgers);
router.route("/burgers/:id").patch(mainMenuController.updateOneBurger);
router.route("/burgers/:id").delete(mainMenuController.deleteOneBurger);
router.route("/burgers").post(mainMenuController.createOneBurger);

// Sides
router.route("/sides").get(mainMenuController.getAllSides);
router.route("/sides/:id").patch(mainMenuController.updateOneSide);
router.route("/sides/:id").delete(mainMenuController.deleteOneSide);
router.route("/sides").post(mainMenuController.createOneSide);

// Loaded Fries
router.route("/loaded-fries").get(mainMenuController.getAllLoadedFries);
router
  .route("/loaded-fries/:id")
  .patch(mainMenuController.updateOneLoadedFries);
router
  .route("/loaded-fries/:id")
  .delete(mainMenuController.deleteOneLoadedFries);
router.route("/loaded-fries").post(mainMenuController.createOneLoadedFries);

// Desserts
router.route("/desserts").get(mainMenuController.getAllDesserts);
router.route("/desserts/:id").patch(mainMenuController.updateOneDessert);
router.route("/desserts/:id").delete(mainMenuController.deleteOneDessert);
router.route("/desserts").post(mainMenuController.createOneDessert);

module.exports = router;
