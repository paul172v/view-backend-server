const express = require("express");
const router = express.Router();

const drinksMenuController = require("../controllers/drinksMenuController");

// Every Array
router.route("/get-every-array").get(drinksMenuController.getEveryArray);

// Draught Beer And Ciders
router
  .route("/draught-beer-and-ciders")
  .get(drinksController.getAllDraughtBeerAndCiders)
  .post(drinksController.createOneDraughtBeerAndCider);

router
  .route("/draught-beer-and-ciders/:id")
  .patch(drinksController.updateOneDraughtBeerAndCider)
  .delete(drinksController.deleteOneDraughtBeerAndCider);

// Bottled Beer And Ciders
router
  .route("/bottled-beer-and-ciders")
  .get(drinksController.getAllBottledBeerAndCiders)
  .post(drinksController.createOneBottledBeerAndCider);

router
  .route("/bottled-beer-and-ciders/:id")
  .patch(drinksController.updateOneBottledBeerAndCider)
  .delete(drinksController.deleteOneBottledBeerAndCider);

// Scottish Fyne Ales
router
  .route("/scottish-fyne-ales")
  .get(drinksController.getAllScottishFyneAles)
  .post(drinksController.createOneScottishFyneAle);

router
  .route("/scottish-fyne-ales/:id")
  .patch(drinksController.updateOneScottishFyneAle)
  .delete(drinksController.deleteOneScottishFyneAle);

// Gins
router
  .route("/gins")
  .get(drinksController.getAllGins)
  .post(drinksController.createOneGin);

router
  .route("/gins/:id")
  .patch(drinksController.updateOneGin)
  .delete(drinksController.deleteOneGin);

// Cocktails
router
  .route("/cocktails")
  .get(drinksController.getAllCocktails)
  .post(drinksController.createOneCocktail);

router
  .route("/cocktails/:id")
  .patch(drinksController.updateOneCocktail)
  .delete(drinksController.deleteOneCocktail);

// Frozen Cocktails
router
  .route("/frozen-cocktails")
  .get(drinksController.getAllFrozenCocktails)
  .post(drinksController.createOneFrozenCocktail);

router
  .route("/frozen-cocktails/:id")
  .patch(drinksController.updateOneFrozenCocktail)
  .delete(drinksController.deleteOneFrozenCocktail);

// Vodka
router
  .route("/vodka")
  .get(drinksController.getAllVodka)
  .post(drinksController.createOneVodka);

router
  .route("/vodka/:id")
  .patch(drinksController.updateOneVodka)
  .delete(drinksController.deleteOneVodka);

// Spirits
router
  .route("/spirits")
  .get(drinksController.getAllSpirits)
  .post(drinksController.createOneSpirit);

router
  .route("/spirits/:id")
  .patch(drinksController.updateOneSpirit)
  .delete(drinksController.deleteOneSpirit);

// Shooters
router
  .route("/shooters")
  .get(drinksController.getAllShooters)
  .post(drinksController.createOneShooter);

router
  .route("/shooters/:id")
  .patch(drinksController.updateOneShooter)
  .delete(drinksController.deleteOneShooter);

// Malts
router
  .route("/malts")
  .get(drinksController.getAllMalts)
  .post(drinksController.createOneMalt);

router
  .route("/malts/:id")
  .patch(drinksController.updateOneMalt)
  .delete(drinksController.deleteOneMalt);

// Red Wine
router
  .route("/red-wine")
  .get(drinksController.getAllRedWine)
  .post(drinksController.createOneRedWine);

router
  .route("/red-wine/:id")
  .patch(drinksController.updateOneRedWine)
  .delete(drinksController.deleteOneRedWine);

// Rose Wine
router
  .route("/rose-wine")
  .get(drinksController.getAllRoseWine)
  .post(drinksController.createOneRoseWine);

router
  .route("/rose-wine/:id")
  .patch(drinksController.updateOneRoseWine)
  .delete(drinksController.deleteOneRoseWine);

// White Wine
router
  .route("/white-wine")
  .get(drinksController.getAllWhiteWine)
  .post(drinksController.createOneWhiteWine);

router
  .route("/white-wine/:id")
  .patch(drinksController.updateOneWhiteWine)
  .delete(drinksController.deleteOneWhiteWine);

// Sparkling Wine
router
  .route("/sparkling-wine")
  .get(drinksController.getAllSparklingWine)
  .post(drinksController.createOneSparklingWine);

router
  .route("/sparkling-wine/:id")
  .patch(drinksController.updateOneSparklingWine)
  .delete(drinksController.deleteOneSparklingWine);

// Champagne
router
  .route("/champagne")
  .get(drinksController.getAllChampagne)
  .post(drinksController.createOneMalt);

router
  .route("/champagne/:id")
  .patch(drinksController.updateOneChampagne)
  .delete(drinksController.deleteOneChampagne);

// Mixers
router
  .route("/mixers")
  .get(drinksController.getAllMixers)
  .post(drinksController.createOneMixer);

router
  .route("/mixers/:id")
  .patch(drinksController.updateOneMixer)
  .delete(drinksController.deleteOneMixer);

// Soft Drinks 10oz
router
  .route("/soft-drinks-10oz")
  .get(drinksController.getAllSoftDrink10oz)
  .post(drinksController.createOneSoftDrink10oz);

router
  .route("/soft-drinks-10oz/:id")
  .patch(drinksController.updateOneSoftDrink10oz)
  .delete(drinksController.deleteOneSoftDrink10oz);

// Soft Drinks 330ml
router
  .route("/soft-drinks-330ml")
  .get(drinksController.getAllSoftDrink330ml)
  .post(drinksController.createOneSoftDrink330ml);

router
  .route("/soft-drinks-330ml/:id")
  .patch(drinksController.updateOneSoftDrink330ml)
  .delete(drinksController.deleteOneSoftDrink330ml);

// Soft Drinks 275ml
router
  .route("/soft-drinks-275ml")
  .get(drinksController.getAllSoftDrink275ml)
  .post(drinksController.createOneSoftDrink275ml);

router
  .route("/soft-drinks-275ml/:id")
  .patch(drinksController.updateOneSoftDrink275ml)
  .delete(drinksController.deleteOneSoftDrink275ml);

// Soft Drinks 250ml
router
  .route("/soft-drinks-250ml")
  .get(drinksController.getAllSoftDrink250ml)
  .post(drinksController.createOneSoftDrink250ml);

router
  .route("/soft-drinks-250ml/:id")
  .patch(drinksController.updateOneSoftDrink250ml)
  .delete(drinksController.deleteOneSoftDrink250ml);
