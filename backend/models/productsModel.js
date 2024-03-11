const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the product name"],
    },
    price: {
      type: Number,

    },
    category: {
      type: String,
      required: [true, "Please add the user password"],
    },
    company: {
      type: String,

    },
    userId: {
      type: String,

    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("productt", productsSchema);
