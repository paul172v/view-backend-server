const handlerFactory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

const DraughtBeerAndCider = require("../models/drinks-menu/draughtBeerAndCiderModel");
const BottledBeerAndCider = require("../models/drinks-menu/bottledBeerAndCiderModel");
const ScottishFyneAle = require("../models/drinks-menu/scottishFyneAlesModel");
const Gin = require("../models/drinks-menu/ginModel");
const Cocktail = required("../models/drinks-menu/cocktailsModel");
const FrozenCocktail = require("../models/drinks-menu/frozenCocktailsModel");
const Vodka = require("../models/drinks-menu/vodkaModel");
const Spirit = require("../models/drinks-menu/spiritsModel");
const Shooter = require("../models/drinks-menu/shootersModel");
const Malt = require("../models/drinks-menu/maltsModel");
const RedWine = require("../models/drinks-menu/redWineModel");
const RoseWine = require("../models/drinks-menu/roseWineModel");
const WhiteWine = require("../models/drinks-menu/whiteWineModel");
const SparklingWine = require("../models/drinks-menu/sparklingWineModel");
const Champagne = require("../models/drinks-menu/champagneModel");
const Mixer = require("../models/drinks-menu/mixersModel");
const SoftDrink10oz = require("../models/drinks-menu/softDrinks10ozModel");
const SoftDrink330ml = require("../models/drinks-menu/softDrinks330mlModel");
const SoftDrink275ml = require("../models/drinks-menu/softDrinks275mlModel");
const SoftDrink250ml = require("../models/drinks-menu/softDrinks250mlModel");

exports.getEveryArray = catchAsync(async (req, res, next) => {
  const draughtBeerAndCiderArr = await DraughtBeerAndCider.find();
  const bottledBeerAndCiderArr = await BottledBeerAndCider.find();
  const scottishFyneAleArr = await ScottishFyneAle.find();
  const ginArr = await Gin.find();
  const cocktailArr = await Cocktail.find();
  const frozenCocktailArr = await FrozenCocktail.find();
  const vodkaArr = await Vodka.find();
  const spiritArr = await Spirit.find();
  const shooterArr = await Shooter.find();
  const maltArr = await Malt.find();
  const redWineArr = await RedWine.find();
  const roseWineArr = await RoseWine.find();
  const whiteWineArr = await WhiteWine.find();
  const sparklingWineArr = await SparklingWine.find();
  const champagneArr = await Champagne.find();
  const mixerArr = await Mixer.find();
  const softDrink10ozArr = await SoftDrink10oz.find();
  const softDrink330mlArr = await SoftDrink330ml.find();
  const softDrink275mlArr = await SoftDrink275ml.find();
  const softDrink250mlArr = await SoftDrink250ml.find();

  res.status(200).json({
    status: "success",
    arrayLengths: {
      draughtBeerAndCiderArr: draughtBeerAndCiderArr.length,
      bottledBeerAndCiderArr: bottledBeerAndCiderArr.length,
      scottishFyneAleArr: scottishFyneAleArr.length,
      ginArr: ginArr.length,
      cocktailArr: cocktailArr.length,
      frozenCocktailArr: frozenCocktailArr.length,
      vodkaArr: vodkaArr.length,
      spiritArr: spiritArr.length,
      shooterArr: shooterArr.length,
      maltArr: maltArr.length,
      redWineArr: redWineArr.length,
      roseWineArr: roseWineArr.length,
      whiteWineArr: whiteWineArr.length,
      sparklingWineArr: sparklingWineArr.length,
      champagneArr: champagneArr.length,
      mixerArr: mixerArr.length,
      softDrink10ozArr: softDrink10ozArr.length,
      softDrink330mlArr: softDrink330mlArr.length,
      softDrink275mlArr: softDrink275mlArr.length,
      softDrink250mlArr: softDrink250mlArr.length,
    },
    payload: {
      data: {
        draughtBeerAndCiderArr,
        bottledBeerAndCiderArr,
        scottishFyneAleArr,
        ginArr,
        cocktailArr,
        frozenCocktailArr,
        vodkaArr,
        spiritArr,
        shooterArr,
        maltArr,
        redWineArr,
        roseWineArr,
        whiteWineArr,
        sparklingWineArr,
        champagneArr,
        mixerArr,
        softDrink10ozArr,
        softDrink330mlArr,
        softDrink275mlArr,
        softDrink250mlArr,
      },
    },
  });
});

// Draught Beer And Ciders
exports.getAllDraughtBeerAndCiders = handlerFactory.getAll(DraughtBeerAndCider);
exports.updateOneDraughtBeerAndCider =
  handlerFactory.updateOne(DraughtBeerAndCider);
exports.deleteOneDraughtBeerAndCider =
  handlerFactory.deleteOne(DraughtBeerAndCider);
exports.createOneDraughtBeerAndCider =
  handlerFactory.createOne(DraughtBeerAndCider);

// Bottled Beer And Ciders
exports.getAllBottledBeerAndCiders = handlerFactory.getAll(BottledBeerAndCider);
exports.updateOneBottledBeerAndCider =
  handlerFactory.updateOne(BottledBeerAndCider);
exports.deleteOneBottledBeerAndCider =
  handlerFactory.deleteOne(BottledBeerAndCider);
exports.createOneBottledBeerAndCider =
  handlerFactory.createOne(BottledBeerAndCider);

// Scottish Fyn Ales
exports.getAllScottishFyneAles = handlerFactory.getAll(ScottishFyneAle);
exports.updateOneScottishFyneAle = handlerFactory.updateOne(ScottishFyneAle);
exports.deleteOneScottishFyneAle = handlerFactory.deleteOne(ScottishFyneAle);
exports.createOneScottishFyneAle = handlerFactory.createOne(ScottishFyneAle);

// Gins
exports.getAllGins = handlerFactory.getAll(Gin);
exports.updateOneGin = handlerFactory.updateOne(Gin);
exports.deleteOneGin = handlerFactory.deleteOne(Gin);
exports.createOneGin = handlerFactory.createOne(Gin);

// Cocktails
exports.getAllCocktails = handlerFactory.getAll(Cocktail);
exports.updateOneCocktail = handlerFactory.updateOne(Cocktail);
exports.deleteOneCocktail = handlerFactory.deleteOne(Cocktail);
exports.createOneCocktail = handlerFactory.createOne(Cocktail);

// Frozen Cocktails
exports.getAllFrozenCocktails = handlerFactory.getAll(FrozenCocktail);
exports.updateOneFrozenCocktail = handlerFactory.updateOne(FrozenCocktail);
exports.deleteOneFrozenCocktail = handlerFactory.deleteOne(FrozenCocktail);
exports.createOneFrozenCocktail = handlerFactory.createOne(FrozenCocktail);

// Vodka
exports.getAllVodka = handlerFactory.getAll(Vodka);
exports.updateOneVodka = handlerFactory.updateOne(Vodka);
exports.deleteOneVodka = handlerFactory.deleteOne(Vodka);
exports.createOneVodka = handlerFactory.createOne(Vodka);

// Spirits
exports.getAllSpirits = handlerFactory.getAll(Spirit);
exports.updateOneSpirit = handlerFactory.updateOne(Spirit);
exports.deleteOneSpirit = handlerFactory.deleteOne(Spirit);
exports.createOneSpirit = handlerFactory.createOne(Spirit);

// Shooters
exports.getAllShooters = handlerFactory.getAll(Shooter);
exports.updateOneShooter = handlerFactory.updateOne(Shooter);
exports.deleteOneShooter = handlerFactory.deleteOne(Shooter);
exports.createOneShooter = handlerFactory.createOne(Shooter);

// Malts
exports.getAllMalts = handlerFactory.getAll(Malt);
exports.updateOneMalt = handlerFactory.updateOne(Malt);
exports.deleteOneMalt = handlerFactory.deleteOne(Malt);
exports.createOneMalt = handlerFactory.createOne(Malt);

// Red Wine
exports.getAllRedWine = handlerFactory.getAll(RedWine);
exports.updateOneRedWine = handlerFactory.updateOne(RedWine);
exports.deleteOneRedWine = handlerFactory.deleteOne(RedWine);
exports.createOneRedWine = handlerFactory.createOne(RedWine);

// Rose Wine
exports.getAllRoseWine = handlerFactory.getAll(RoseWine);
exports.updateOneRoseWine = handlerFactory.updateOne(RoseWine);
exports.deleteOneRoseWine = handlerFactory.deleteOne(RoseWine);
exports.createOneRoseWine = handlerFactory.createOne(RoseWine);

// White Wine
exports.getAllWhiteWine = handlerFactory.getAll(WhiteWine);
exports.updateOneWhiteWine = handlerFactory.updateOne(WhiteWine);
exports.deleteOneWhiteWine = handlerFactory.deleteOne(WhiteWine);
exports.createOneWhiteWine = handlerFactory.createOne(WhiteWine);

// Sparkling Wine
exports.getAllSparklingWine = handlerFactory.getAll(SparklingWine);
exports.updateOneSparklingWine = handlerFactory.updateOne(SparklingWine);
exports.deleteOneSparklingWine = handlerFactory.deleteOne(SparklingWine);
exports.createOneSparklingWine = handlerFactory.createOne(SparklingWine);

// Champagne
exports.getAllChampagne = handlerFactory.getAll(Champagne);
exports.updateOneChampagne = handlerFactory.updateOne(Champagne);
exports.deleteOneChampagne = handlerFactory.deleteOne(Champagne);
exports.createOneChampagne = handlerFactory.createOne(Champagne);

// Mixers
exports.getAllMixers = handlerFactory.getAll(Mixer);
exports.updateOneMixer = handlerFactory.updateOne(Mixer);
exports.deleteOneMixer = handlerFactory.deleteOne(Mixer);
exports.createOneMixer = handlerFactory.createOne(Mixer);

// Soft Drinks 10oz
exports.getAllSoftDrinks10oz = handlerFactory.getAll(SoftDrink10oz);
exports.updateOneSoftDrink10oz = handlerFactory.updateOne(SoftDrink10oz);
exports.deleteOneSoftDrink10oz = handlerFactory.deleteOne(SoftDrink10oz);
exports.createOneSoftDrink10oz = handlerFactory.createOne(SoftDrink10oz);

// Soft Drinks 330ml
exports.getAllSoftDrinks330ml = handlerFactory.getAll(SoftDrink330ml);
exports.updateOneSoftDrink330ml = handlerFactory.updateOne(SoftDrink330ml);
exports.deleteOneSoftDrink330ml = handlerFactory.deleteOne(SoftDrink330ml);
exports.createOneSoftDrink330ml = handlerFactory.createOne(SoftDrink330ml);

// Soft Drinks 275ml
exports.getAllSoftDrinks275ml = handlerFactory.getAll(SoftDrink275ml);
exports.updateOneSoftDrink275ml = handlerFactory.updateOne(SoftDrink275ml);
exports.deleteOneSoftDrink275ml = handlerFactory.deleteOne(SoftDrink275ml);
exports.createOneSoftDrink275ml = handlerFactory.createOne(SoftDrink275ml);

// Soft Drinks 250ml
exports.getAllSoftDrinks250ml = handlerFactory.getAll(SoftDrink250ml);
exports.updateOneSoftDrink250ml = handlerFactory.updateOne(SoftDrink250ml);
exports.deleteOneSoftDrink250ml = handlerFactory.deleteOne(SoftDrink250ml);
exports.createOneSoftDrink250ml = handlerFactory.createOne(SoftDrink250ml);
