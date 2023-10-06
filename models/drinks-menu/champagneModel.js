const mongoose = require("mongoose");

const champagneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  bottle: {
    type: Number,
    required: [true, "Menu item must have a bottle price"],
  },
  details: {
    type: String,
    required: [true, "Menu item must have details"],
  },
});

const Champagne = new mongoose.model("Champagne", champagneSchema);

module.exports = Champagne;
