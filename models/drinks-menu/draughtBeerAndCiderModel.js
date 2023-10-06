const mongoose = require("mongoose");

const draughtBeerAndCiderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item's name must be unique"],
  },
  pint: Number,
  halfPint: Number,
});

const DraughtBeerAndCider = new mongoose.model(
  "DraughtBeerAndCider",
  draughtBeerAndCiderSchema
);

module.exports = DraughtBeerAndCider;
