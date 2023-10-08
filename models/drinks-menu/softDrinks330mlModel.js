const mongoose = require("mongoose");

const softDrinks330mlSchema = new mongoose.Schema({
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

const SoftDrink330ml = new mongoose.model(
  "SoftDrink330ml",
  softDrinks330mlSchema
);

module.exports = SoftDrink330ml;
