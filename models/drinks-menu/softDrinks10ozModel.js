const mongoose = require("mongoose");

const softDrinks10ozSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item's name must be unique"],
  },
  oz10: {
    type: Number,
    required: [true, "Menu item must have a oz10 price"],
  },
  oz16: {
    type: Number,
    required: [true, "Menu item must have a oz16 price"],
  },
});

const SoftDrinks10oz = new mongoose.model(
  "SoftDrinks10oz",
  softDrinks10ozSchema
);

module.exports = SoftDrinks10oz;
