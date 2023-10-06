const mongoose = require("mongoose");

// Define the schema for individual meal items
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
  },
  dietary: {
    type: [String],
    default: [],
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
const MakeAMealMain = mongoose.model("MakeAMealMain", MakeAMealMainSchema);
const MakeAMealSide = mongoose.model("MakeAMealSide", MakeAMealSideSchema);
const MakeAMealExtra = mongoose.model("MakeAMealExtra", MakeAMealExtraSchema);

module.exports = {
  MenuItem,
  MakeAMealMain,
  MakeAMealSide,
  MakeAMealExtra,
};
