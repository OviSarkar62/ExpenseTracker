const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    type: {
      type: String,
      required: [true, "type is required"],
    },
    category: {
      type: String,
      requires: [true, "category is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: Date,
      required: [true, "data is required"],
    },
    createdOn:{
        type: Date,
        default: Date.now,
    },
  },
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;