const express = require("express");
const router = express.Router();

const drinksMenuController = require("../controllers/drinksMenuController");

// Every Array
router.route("/get-every-array").get(drinksMenuController.getEveryArray);

// Draught Beer And Ciders
router
  .route("/draught-beer-and-ciders")
  .get(drinksMenuController.getAllDraughtBeerAndCiders)
  .post(drinksMenuController.createOneDraughtBeerAndCider);

router
  .route("/draught-beer-and-ciders/:id")
  .patch(drinksMenuController.updateOneDraughtBeerAndCider)
  .delete(drinksMenuController.deleteOneDraughtBeerAndCider);

// Bottled Beer And Ciders
router
  .route("/bottled-beer-and-ciders")
  .get(drinksMenuController.getAllBottledBeerAndCiders)
  .post(drinksMenuController.createOneBottledBeerAndCider);

router
  .route("/bottled-beer-and-ciders/:id")
  .patch(drinksMenuController.updateOneBottledBeerAndCider)
  .delete(drinksMenuController.deleteOneBottledBeerAndCider);

// Scottish Fyne Ales
router
  .route("/scottish-fyne-ales")
  .get(drinksMenuController.getAllScottishFyneAles)
  .post(drinksMenuController.createOneScottishFyneAle);

router
  .route("/scottish-fyne-ales/:id")
  .patch(drinksMenuController.updateOneScottishFyneAle)
  .delete(drinksMenuController.deleteOneScottishFyneAle);

// Gins
router
  .route("/gins")
  .get(drinksMenuController.getAllGins)
  .post(drinksMenuController.createOneGin);

router
  .route("/gins/:id")
  .patch(drinksMenuController.updateOneGin)
  .delete(drinksMenuController.deleteOneGin);

// Cocktails
router
  .route("/cocktails")
  .get(drinksMenuController.getAllCocktails)
  .post(drinksMenuController.createOneCocktail);

router
  .route("/cocktails/:id")
  .patch(drinksMenuController.updateOneCocktail)
  .delete(drinksMenuController.deleteOneCocktail);

// Frozen Cocktails
router
  .route("/frozen-cocktails")
  .get(drinksMenuController.getAllFrozenCocktails)
  .post(drinksMenuController.createOneFrozenCocktail);

router
  .route("/frozen-cocktails/:id")
  .patch(drinksMenuController.updateOneFrozenCocktail)
  .delete(drinksMenuController.deleteOneFrozenCocktail);

// Vodka
router
  .route("/vodka")
  .get(drinksMenuController.getAllVodka)
  .post(drinksMenuController.createOneVodka);

router
  .route("/vodka/:id")
  .patch(drinksMenuController.updateOneVodka)
  .delete(drinksMenuController.deleteOneVodka);

// Spirits
router
  .route("/spirits")
  .get(drinksMenuController.getAllSpirits)
  .post(drinksMenuController.createOneSpirit);

router
  .route("/spirits/:id")
  .patch(drinksMenuController.updateOneSpirit)
  .delete(drinksMenuController.deleteOneSpirit);

// Shooters
router
  .route("/shooters")
  .get(drinksMenuController.getAllShooters)
  .post(drinksMenuController.createOneShooter);

router
  .route("/shooters/:id")
  .patch(drinksMenuController.updateOneShooter)
  .delete(drinksMenuController.deleteOneShooter);

// Malts
router
  .route("/malts")
  .get(drinksMenuController.getAllMalts)
  .post(drinksMenuController.createOneMalt);

router
  .route("/malts/:id")
  .patch(drinksMenuController.updateOneMalt)
  .delete(drinksMenuController.deleteOneMalt);

// Red Wine
router
  .route("/red-wine")
  .get(drinksMenuController.getAllRedWine)
  .post(drinksMenuController.createOneRedWine);

router
  .route("/red-wine/:id")
  .patch(drinksMenuController.updateOneRedWine)
  .delete(drinksMenuController.deleteOneRedWine);

// Rose Wine
router
  .route("/rose-wine")
  .get(drinksMenuController.getAllRoseWine)
  .post(drinksMenuController.createOneRoseWine);

router
  .route("/rose-wine/:id")
  .patch(drinksMenuController.updateOneRoseWine)
  .delete(drinksMenuController.deleteOneRoseWine);

// White Wine
router
  .route("/white-wine")
  .get(drinksMenuController.getAllWhiteWine)
  .post(drinksMenuController.createOneWhiteWine);

router
  .route("/white-wine/:id")
  .patch(drinksMenuController.updateOneWhiteWine)
  .delete(drinksMenuController.deleteOneWhiteWine);

// Sparkling Wine
router
  .route("/sparkling-wine")
  .get(drinksMenuController.getAllSparklingWine)
  .post(drinksMenuController.createOneSparklingWine);

router
  .route("/sparkling-wine/:id")
  .patch(drinksMenuController.updateOneSparklingWine)
  .delete(drinksMenuController.deleteOneSparklingWine);

// Champagne
router
  .route("/champagne")
  .get(drinksMenuController.getAllChampagne)
  .post(drinksMenuController.createOneMalt);

router
  .route("/champagne/:id")
  .patch(drinksMenuController.updateOneChampagne)
  .delete(drinksMenuController.deleteOneChampagne);

// Mixers
router
  .route("/mixers")
  .get(drinksMenuController.getAllMixers)
  .post(drinksMenuController.createOneMixer);

router
  .route("/mixers/:id")
  .patch(drinksMenuController.updateOneMixer)
  .delete(drinksMenuController.deleteOneMixer);

// Soft Drinks 10oz
router
  .route("/soft-drinks-10oz")
  .get(drinksMenuController.getAllSoftDrinks10oz)
  .post(drinksMenuController.createOneSoftDrink10oz);

router
  .route("/soft-drinks-10oz/:id")
  .patch(drinksMenuController.updateOneSoftDrink10oz)
  .delete(drinksMenuController.deleteOneSoftDrink10oz);

// Soft Drinks 330ml
router
  .route("/soft-drinks-330ml")
  .get(drinksMenuController.getAllSoftDrinks330ml)
  .post(drinksMenuController.createOneSoftDrink330ml);

router
  .route("/soft-drinks-330ml/:id")
  .patch(drinksMenuController.updateOneSoftDrink330ml)
  .delete(drinksMenuController.deleteOneSoftDrink330ml);

// Soft Drinks 275ml
router
  .route("/soft-drinks-275ml")
  .get(drinksMenuController.getAllSoftDrinks275ml)
  .post(drinksMenuController.createOneSoftDrink275ml);

router
  .route("/soft-drinks-275ml/:id")
  .patch(drinksMenuController.updateOneSoftDrink275ml)
  .delete(drinksMenuController.deleteOneSoftDrink275ml);

// Soft Drinks 250ml
router
  .route("/soft-drinks-250ml")
  .get(drinksMenuController.getAllSoftDrinks250ml)
  .post(drinksMenuController.createOneSoftDrink250ml);

router
  .route("/soft-drinks-250ml/:id")
  .patch(drinksMenuController.updateOneSoftDrink250ml)
  .delete(drinksMenuController.deleteOneSoftDrink250ml);

module.exports = router;
