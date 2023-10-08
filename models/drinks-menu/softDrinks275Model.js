const mongoose = require("mongoose");

const softDrinks275mlSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item's name must be unique"],
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const SoftDrink275ml = new mongoose.model(
  "SoftDrink275ml",
  softDrinks275mlSchema
);

module.exports = SoftDrink275ml;
