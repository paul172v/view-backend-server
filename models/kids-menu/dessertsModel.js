const mongoose = require("mongoose");

const dessertsSchema = new mongoose.Schema({
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

const Dessert = new mongoose.model("Dessert", dessertsSchema);

module.exports = Dessert;
