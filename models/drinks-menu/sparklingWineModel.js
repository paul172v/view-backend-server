const mongoose = require("mongoose");

const sparklingWineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  centiliter: {
    type: Number,
  },
  measure: {
    type: Number,
    required: [true, "Menu item must have a measure"],
  },
  bottle: {
    type: Number,
    required: [true, "Menu item must have a bottle price"],
  },
  details: {
    type: String,
    required: [true, "Menu item must have details"],
  },
});

const SparklingWine = new mongoose.model("SparklingWine", sparklingWineSchema);

module.exports = SparklingWine;
