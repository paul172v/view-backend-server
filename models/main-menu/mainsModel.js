const mongoose = require("mongoose");

const addsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const mainsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  dietary: {
    type: [String],
    enum: ["", "gfo", "vgo", "v"],
  },
  details: {
    type: String,
  },
  add: {
    type: [addsSchema],
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const Main = mongoose.model("Main", mainsSchema);

module.exports = Main;
