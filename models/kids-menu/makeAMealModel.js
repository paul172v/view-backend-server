const mongoose = require("mongoose");

// Define the schema for individual meal items
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
});

// Define the schema for meal categories, each containing multiple meal items
const MakeAMealMainSchema = new mongoose.Schema({
  items: [menuItemSchema],
});

const MakeAMealSideSchema = new mongoose.Schema({
  items: [menuItemSchema],
});

const MakeAMealExtraSchema = new mongoose.Schema({
  items: [menuItemSchema],
});

// Create models from the schemas
const MenuItem = mongoose.model("MenuItem", menuItemSchema);
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
  MenuItem,
  KidsMakeAMealMain,
  KidsMakeAMealSide,
  KidsMakeAMealExtra,
};
