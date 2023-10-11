const mongoose = require("mongoose");

// Define the schema for meal categories, each containing multiple meal items
const MakeAMealMainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
});

const MakeAMealSideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
});

const MakeAMealExtraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
});

// Create models from the schemas
const KidsMakeAMealMain = mongoose.model(
  "KidsMakeAMealMain",
  MakeAMealMainSchema
);
const KidsMakeAMealSide = mongoose.model(
  "KidsMakeAMealSide",
  MakeAMealSideSchema
);
const KidsMakeAMealExtra = mongoose.model(
  "KidsMakeAMealExtra",
  MakeAMealExtraSchema
);

module.exports = {
  KidsMakeAMealMain,
  KidsMakeAMealSide,
  KidsMakeAMealExtra,
};
