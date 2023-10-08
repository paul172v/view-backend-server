const mongoose = require("mongoose");

const sidesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item's name must be unique"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const Side = new mongoose.model("Side", sidesSchema);

module.exports = Side;
