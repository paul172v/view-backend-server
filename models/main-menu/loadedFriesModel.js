const mongoose = require("mongoose");

const loadedFriesSchema = new mongoose.Schema({
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

const LoadedFries = new mongoose.model("LoadedFries", loadedFriesSchema);

module.exports = LoadedFries;
