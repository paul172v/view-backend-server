const mongoose = require("mongoose");

const softDrinks250mlSchema = new mongoose.Schema({
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

const SoftDrink250ml = new mongoose.model(
  "SoftDrink250ml",
  softDrinks250mlSchema
);

module.exports = SoftDrink250ml;
