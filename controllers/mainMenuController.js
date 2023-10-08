const handlerFactory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

const Starter = require("../models/main-menu/startersModel");
const Sharer = require("../models/main-menu/sharersModel");
const Main = require("../models/main-menu/mainsModel");
const Salad = require("../models/main-menu/saladsModel");
const Steak = require("../models/main-menu/steaksModel");
const SteakSide = require("../models/main-menu/steakSidesModel");
const Burger = require("../models/main-menu/burgersModel");
const Side = require("../models/main-menu/sidesModel");
const LoadedFries = require("../models/main-menu/loadedFriesModel");
const Dessert = require("../models/main-menu/dessertsModel");

// Every Array
exports.getEveryArray = catchAsync(async (req, res, next) => {
  const startersArr = await Starter.find();
  const sharersArr = await Sharer.find();
  const mainsArr = await Main.find();
  const steaksArr = await Steak.find();
  const steakSidesArr = await SteakSide.find();
  const burgersArr = await Burger.find();
  const sidesArr = await Side.find();
  const loadedFriesArr = await LoadedFries.find();
  const dessertsArr = await Dessert.find();

  res.status(200).json({
    status: "success",
    arrayLengths: {
      startersArr: startersArr.length,
      sharersArr: sharersArr.length,
      mainsArr: mainsArr.length,
      steaksArr: steaksArr.length,
      steakSidesArr: steakSidesArr.length,
      burgersArr: burgersArr.length,
      sidesArr: sidesArr.length,
      loadedFriesArr: loadedFriesArr.length,
      dessertsArr: dessertsArr.length,
    },
    payload: {
      data: {
        startersArr,
        sharersArr,
        mainsArr,
        steaksArr,
        steakSidesArr,
        burgersArr,
        sidesArr,
        loadedFriesArr,
        dessertsArr,
      },
    },
  });
});

// Starters
exports.getAllStarters = handlerFactory.getAll(Starter);
exports.updateOneStarter = handlerFactory.updateOne(Starter);
exports.deleteOneStarter = handlerFactory.deleteOne(Starter);
exports.createOneStarter = handlerFactory.createOne(Starter);

// Sharers
exports.getAllSharers = handlerFactory.getAll(Sharer);
exports.updateOneSharer = handlerFactory.updateOne(Sharer);
exports.deleteOneSharer = handlerFactory.deleteOne(Sharer);
exports.createOneSharer = handlerFactory.createOne(Sharer);

// Mains
exports.getAllMains = handlerFactory.getAll(Main);
exports.updateOneMain = handlerFactory.updateOne(Main);
exports.deleteOneMain = handlerFactory.deleteOne(Main);
exports.createOneMain = handlerFactory.createOne(Main);

// Salads
exports.getAllSalads = handlerFactory.getAll(Salad);
exports.updateOneSalad = handlerFactory.updateOne(Salad);
exports.deleteOneSalad = handlerFactory.deleteOne(Salad);
exports.createOneSalad = handlerFactory.createOne(Salad);

// Steaks
exports.getAllSteaks = handlerFactory.getAll(Steak);
exports.updateOneSteak = handlerFactory.updateOne(Steak);
exports.deleteOneSteak = handlerFactory.deleteOne(Steak);
exports.createOneSteak = handlerFactory.createOne(Steak);

// Steak Sides
exports.getAllSteakSides = handlerFactory.getAll(SteakSide);
exports.updateOneSteakSide = handlerFactory.updateOne(SteakSide);
exports.deleteOneSteakSide = handlerFactory.deleteOne(SteakSide);
exports.createOneSteakSide = handlerFactory.createOne(SteakSide);

// Burgers
exports.getAllBurgers = handlerFactory.getAll(Burger);
exports.updateOneBurger = handlerFactory.updateOne(Burger);
exports.deleteOneBurger = handlerFactory.deleteOne(Burger);
exports.createOneBurger = handlerFactory.createOne(Burger);

// Sides
exports.getAllSides = handlerFactory.getAll(Side);
exports.updateOneSide = handlerFactory.updateOne(Side);
exports.deleteOneSide = handlerFactory.deleteOne(Side);
exports.createOneSide = handlerFactory.createOne(Side);

// LoadedFries
exports.getAllLoadedFries = handlerFactory.getAll(LoadedFries);
exports.updateOneLoadedFries = handlerFactory.updateOne(LoadedFries);
exports.deleteOneLoadedFries = handlerFactory.deleteOne(LoadedFries);
exports.createOneLoadedFries = handlerFactory.createOne(LoadedFries);

// Desserts
exports.getAllDesserts = handlerFactory.getAll(Dessert);
exports.updateOneDessert = handlerFactory.updateOne(Dessert);
exports.deleteOneDessert = handlerFactory.deleteOne(Dessert);
exports.createOneDessert = handlerFactory.createOne(Dessert);
