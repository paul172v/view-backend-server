const mongoose = require("mongoose");

const bottledBeerAndCiderSchema = new mongoose.Schema({
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

const BottledBeerAndCider = new mongoose.model(
  "BottledBeerAndCider",
  bottledBeerAndCiderSchema
);

module.exports = BottledBeerAndCider;
