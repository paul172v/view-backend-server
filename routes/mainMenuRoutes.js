const express = require("express");
const router = express.Router();
const mainMenuController = require("../controllers/mainMenuController");

// Every Array
router.route("/get-every-array").get(mainMenuController.getEveryArray);

// Sharers
router
  .route("/sharers")
  .get(mainMenuController.getAllSharers)
  .post(mainMenuController.createOneSharer);
router
  .route("/sharers/:id")
  .patch(mainMenuController.updateOneSharer)
  .delete(mainMenuController.deleteOneSharer);

// Mains
router
  .route("/mains")
  .get(mainMenuController.getAllMains)
  .post(mainMenuController.createOneMain);
router
  .route("/mains/:id")
  .patch(mainMenuController.updateOneMain)
  .delete(mainMenuController.deleteOneMain);

// Salads
router
  .route("/salads")
  .get(mainMenuController.getAllSalads)
  .post(mainMenuController.createOneSalad);
router
  .route("/salads/:id")
  .patch(mainMenuController.updateOneSalad)
  .delete(mainMenuController.deleteOneSalad);

// Steaks
router
  .route("/steaks")
  .get(mainMenuController.getAllSteaks)
  .post(mainMenuController.createOneSteak);
router
  .route("/steaks/:id")
  .patch(mainMenuController.updateOneSteak)
  .delete(mainMenuController.deleteOneSteak);

// Steak Sides
router
  .route("/steak-sides")
  .get(mainMenuController.getAllSteakSides)
  .post(mainMenuController.createOneSteakSide);
router
  .route("/steak-sides/:id")
  .patch(mainMenuController.updateOneSteakSide)
  .delete(mainMenuController.deleteOneSteakSide);

// Burgers
router
  .route("/burgers")
  .get(mainMenuController.getAllBurgers)
  .post(mainMenuController.createOneBurger);
router
  .route("/burgers/:id")
  .patch(mainMenuController.updateOneBurger)
  .delete(mainMenuController.deleteOneBurger);

// Sides
router
  .route("/sides")
  .get(mainMenuController.getAllSides)
  .post(mainMenuController.createOneSide);
router
  .route("/sides/:id")
  .patch(mainMenuController.updateOneSide)
  .delete(mainMenuController.deleteOneSide);

// Loaded Fries
router
  .route("/loaded-fries")
  .get(mainMenuController.getAllLoadedFries)
  .post(mainMenuController.createOneLoadedFries);
router
  .route("/loaded-fries/:id")
  .patch(mainMenuController.updateOneLoadedFries)
  .delete(mainMenuController.deleteOneLoadedFries);

// Desserts
router
  .route("/desserts")
  .get(mainMenuController.getAllDesserts)
  .post(mainMenuController.createOneDessert);
router
  .route("/desserts/:id")
  .patch(mainMenuController.updateOneDessert)
  .delete(mainMenuController.deleteOneDessert);

module.exports = router;
