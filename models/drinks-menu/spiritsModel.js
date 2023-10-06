const mongoose = require("mongoose");

const spiritsSchema = new mongoose.Schema({
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

const Spirit = new mongoose.model("Spirit", spiritsSchema);

module.exports = Spirit;
