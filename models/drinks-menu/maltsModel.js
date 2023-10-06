const mongoose = require("mongoose");

const maltsSchema = new mongoose.Schema({
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

const Malt = new mongoose.model("Malt", maltsSchema);

module.exports = Malt;
