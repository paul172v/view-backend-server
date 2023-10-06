const mongoose = require("mongoose");

const addsSchema = new mongoose.Schema([
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

const mainsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Menu item must have a name"],
    unique: [true, "Menu item must have a unique name"],
  },
  dietary: {
    type: [String],
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

const Main = mongoose.model("Main", mainsSchema);

module.exports = Main;
