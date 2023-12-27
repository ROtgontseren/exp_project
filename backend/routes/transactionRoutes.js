const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalIncomeExpense,
} = require("../controller/transactionController");

const router = Router();

router.route("/").post(createTransaction).get(getAllTransaction);
router.route("/total").get(getTotalIncomeExpense);
router.route("/:user_id").get(getAllTransaction);

module.exports = router;
