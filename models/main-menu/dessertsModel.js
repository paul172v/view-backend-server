const mongoose = require("mongoose");

const scoopsSchema = new mongoose.Schema([
  {
    item: {
      type: String,
      required: ["Add must have a name"],
    },
    price: {
      type: Number,
      required: [true, "Add must have a price"],
    },
  },
]);

const dessertsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  dietary: {
    type: [String],
    enum: ["gfo", "vgo", "v"],
  },
  details: {
    type: String,
  },
  scoops: {
    type: [scoopsSchema],
  },
  price: {
    type: Number,
    required: [true, "Menu item must have a price"],
  },
});

const Dessert = new mongoose.model("Dessert", dessertsSchema);

module.exports = Dessert;
