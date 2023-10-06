const mongoose = require("mongoose");

const steaksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item's name must be unique"],
  },
  dietary: {
    type: String,
    enum: ["gfo", "vgo", "v"],
  },
  details: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const Steak = new mongoose.model("Steak", steaksSchema);

module.exports = Steak;
