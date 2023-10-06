const mongoose = require("mongoose");

const ginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  percentage: {
    type: Number,
    required: [true, "Menu item must have a percentage"],
  },
  details: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const Gin = new mongoose.model("Gin", ginSchema);

module.exports = Gin;
