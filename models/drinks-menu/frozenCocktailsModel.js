const mongoose = require("mongoose");

const frozenCocktailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  details: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const FrozenCocktail = new mongoose.model(
  "FrozenCocktail",
  frozenCocktailsSchema
);

module.exports = FrozenCocktail;
