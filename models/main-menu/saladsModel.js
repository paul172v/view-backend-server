const mongoose = require("mongoose");

const saladsSchema = new mongoose.Schema({
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

const Salad = new mongoose.model("Salad", saladsSchema);

module.exports = Salad;
