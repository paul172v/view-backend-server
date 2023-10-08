const express = require("express");
const router = express.Router();

const kidsMenuController = require("../controllers/kidsMenuController");

// Every Array
router.route("/get-every-array").get(kidsMenuController.getEveryArray);

// Starters
router.route("/starters").get(kidsMenuController.getAllStarters);
router.route("/starters/:id").patch(kidsMenuController.updateOneStarter);
router.route("/starters/:id").delete(kidsMenuController.deleteOneStarter);
router.route("/starters").post(kidsMenuController.createOneStarter);

// Mains
router.route("/mains").get(kidsMenuController.getAllMains);
router.route("/mains/:id").patch(kidsMenuController.updateOneMain);
router.route("/mains/:id").delete(kidsMenuController.deleteOneMain);
router.route("/mains").post(kidsMenuController.createOneMain);

// Make A Meal Mains
router.route("/make-a-meal-mains").get(kidsMenuController.getAllMakeAMealMains);
router
  .route("/make-a-meal-mains/:id")
  .patch(kidsMenuController.updateOneMakeAMealMain);
router
  .route("/make-a-meal-mains/:id")
  .delete(kidsMenuController.deleteOneMakeAMealMain);
router
  .route("/make-a-meal-mains")
  .post(kidsMenuController.createOneMakeAMealMain);

// Make A Meal Sides
router.route("/make-a-meal-sides").get(kidsMenuController.getAllMakeAMealSides);
router
  .route("/make-a-meal-sides/:id")
  .patch(kidsMenuController.updateOneMakeAMealSide);
router
  .route("/make-a-meal-sides/:id")
  .delete(kidsMenuController.deleteOneMakeAMealSide);
router
  .route("/make-a-meal-sides")
  .post(kidsMenuController.createOneMakeAMealSide);

// Make A Meal Extras
router
  .route("/make-a-meal-extras")
  .get(kidsMenuController.getAllMakeAMealExtras);
router
  .route("/make-a-meal-extras/:id")
  .patch(kidsMenuController.updateOneMakeAMealExtra);
router
  .route("/make-a-meal-extras/:id")
  .delete(kidsMenuController.deleteOneMakeAMealExtra);
router
  .route("/make-a-meal-extras")
  .post(kidsMenuController.createOneMakeAMealExtra);

// Desserts
router.route("/desserts").get(kidsMenuController.getAllDesserts);
router.route("/desserts/:id").patch(kidsMenuController.updateOneDessert);
router.route("/desserts/:id").delete(kidsMenuController.deleteOneDessert);
router.route("/desserts").post(kidsMenuController.createOneDessert);

module.exports = router;
