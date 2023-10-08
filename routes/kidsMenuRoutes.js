const express = require("express");
const router = express.Router();

const kidsMenuController = require("../controllers/kidsMenuController");

// Every Array
router.route("/get-every-array").get(kidsMenuController.getEveryArray);

// Starters
router
  .route("/starters")
  .get(kidsMenuController.getAllStarters)
  .post(kidsMenuController.createOneStarter);
router
  .route("/starters/:id")
  .patch(kidsMenuController.updateOneStarter)
  .delete(kidsMenuController.deleteOneStarter);

// Mains
router
  .route("/mains")
  .get(kidsMenuController.getAllMains)
  .post(kidsMenuController.createOneMain);
router
  .route("/mains/:id")
  .patch(kidsMenuController.updateOneMain)
  .delete(kidsMenuController.deleteOneMain);

// Make A Meal Mains
router
  .route("/make-a-meal-mains")
  .get(kidsMenuController.getAllMakeAMealMains)
  .post(kidsMenuController.createOneMakeAMealMain);
router
  .route("/make-a-meal-mains/:id")
  .patch(kidsMenuController.updateOneMakeAMealMain)
  .delete(kidsMenuController.deleteOneMakeAMealMain);

// Make A Meal Sides
router
  .route("/make-a-meal-sides")
  .get(kidsMenuController.getAllMakeAMealSides)
  .post(kidsMenuController.createOneMakeAMealSide);
router
  .route("/make-a-meal-sides/:id")
  .patch(kidsMenuController.updateOneMakeAMealSide)
  .delete(kidsMenuController.deleteOneMakeAMealSide);

// Make A Meal Extras
router
  .route("/make-a-meal-extras")
  .get(kidsMenuController.getAllMakeAMealExtras)
  .post(kidsMenuController.createOneMakeAMealExtra);
router
  .route("/make-a-meal-extras/:id")
  .patch(kidsMenuController.updateOneMakeAMealExtra)
  .delete(kidsMenuController.deleteOneMakeAMealExtra);

// Desserts
router
  .route("/desserts")
  .get(kidsMenuController.getAllDesserts)
  .post(kidsMenuController.createOneDessert);
router
  .route("/desserts/:id")
  .patch(kidsMenuController.updateOneDessert)
  .delete(kidsMenuController.deleteOneDessert);

module.exports = router;
