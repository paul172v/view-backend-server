const mongoose = require("mongoose");

const roseWineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  country: {
    type: String,
    required: [true, "Menu item must have a country"],
  },
  bottle: {
    type: Number,
    required: [true, "Menu item must have a bottle price"],
  },
  ml250: {
    type: Number,
    required: [true, "Menu item must have a ml250 price"],
  },
  ml175: {
    type: Number,
    required: [true, "Menu item must have a ml175 price"],
  },
  details: {
    type: String,
    required: [true, "Menu item must have details"],
  },
});

const RoseWine = new mongoose.model("RoseWine", roseWineSchema);

module.exports = RoseWine;
