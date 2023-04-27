const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transaction", addTransaction);
//Edit transection POST MEthod
router.post("/edit-transaction", editTransaction);
//Delete transection POST MEthod
router.post("/delete-transaction", deleteTransaction);
//get transections
router.post("/get-transaction", getAllTransaction);

module.exports = router;