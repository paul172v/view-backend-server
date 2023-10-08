const handlerFactory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

const KidsStarter = require("../models/kids-menu/startersModel");
const KidsMain = require("../models/kids-menu/mainsModel");
const {
  KidsMakeAMealMain,
  KidsMakeAMealSide,
  KidsMakeAMealExtra,
} = require("../models/kids-menu/makeAMealModel");
const KidsDessert = require("../models/kids-menu/dessertsModel");

// Every Array
exports.getEveryArray = catchAsync(async (req, res, next) => {
  const startersArr = await KidsStarter.find();
  const mainsArr = await KidsMain.find();
  const makeAMealMainsArr = await KidsMakeAMealMain.find();
  const makeAMealSidesArr = await KidsMakeAMealSide.find();
  const makeAMealExtrasArr = await KidsMakeAMealExtra.find();
  const dessertsArr = await KidsDessert.find();

  res.status(200).json({
    status: "success",
    arrayLengths: {
      startersArr: startersArr.length,
      mainsArr: mainsArr.length,
      makeAMealMainsArr: makeAMealMainsArr.length,
      makeAMealSidesArr: makeAMealSidesArr.length,
      makeAMealExtrasArr: makeAMealExtrasArr.length,
      dessertsArr: dessertsArr.length,
    },
    payload: {
      data: {
        startersArr,
        mainsArr,
        makeAMealMainsArr,
        makeAMealSidesArr,
        makeAMealExtrasArr,
        dessertsArr,
      },
    },
  });
});

// Starters
exports.getAllStarters = handlerFactory.getAll(KidsStarter);
exports.updateOneStarter = handlerFactory.updateOne(KidsStarter);
exports.deleteOneStarter = handlerFactory.deleteOne(KidsStarter);
exports.createOneStarter = handlerFactory.createOne(KidsStarter);

// Mains
exports.getAllMains = handlerFactory.getAll(KidsMain);
exports.updateOneMain = handlerFactory.updateOne(KidsMain);
exports.deleteOneMain = handlerFactory.deleteOne(KidsMain);
exports.createOneMain = handlerFactory.createOne(KidsMain);

// Make A Meal Main
exports.getAllMakeAMealMains = handlerFactory.getAll(KidsMakeAMealMain);
exports.updateOneMakeAMealMain = handlerFactory.updateOne(KidsMakeAMealMain);
exports.deleteOneMakeAMealMain = handlerFactory.deleteOne(KidsMakeAMealMain);
exports.createOneMakeAMealMain = handlerFactory.createOne(KidsMakeAMealMain);

// Make A Meal Side
exports.getAllMakeAMealSides = handlerFactory.getAll(KidsMakeAMealSide);
exports.updateOneMakeAMealSide = handlerFactory.updateOne(KidsMakeAMealSide);
exports.deleteOneMakeAMealSide = handlerFactory.deleteOne(KidsMakeAMealSide);
exports.createOneMakeAMealSide = handlerFactory.createOne(KidsMakeAMealSide);

// Make A Meal Extra
exports.getAllMakeAMealExtras = handlerFactory.getAll(KidsMakeAMealExtra);
exports.updateOneMakeAMealExtra = handlerFactory.updateOne(KidsMakeAMealExtra);
exports.deleteOneMakeAMealExtra = handlerFactory.deleteOne(KidsMakeAMealExtra);
exports.createOneMakeAMealExtra = handlerFactory.createOne(KidsMakeAMealExtra);

// Desserts
exports.getAllDesserts = handlerFactory.getAll(KidsDessert);
exports.updateOneDessert = handlerFactory.updateOne(KidsDessert);
exports.deleteOneDessert = handlerFactory.deleteOne(KidsDessert);
exports.createOneDessert = handlerFactory.createOne(KidsDessert);
