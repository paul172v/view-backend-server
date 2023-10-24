const mongoose = require("mongoose");

const addsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["Add must have a name"],
  },
  price: {
    type: Number,
    required: [true, "Add must have a price"],
  },
});

const burgersSchema = new mongoose.Schema({
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

const Burger = mongoose.model("Burger", burgersSchema);

module.exports = Burger;
