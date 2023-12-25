const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
} = require("../controller/categoryController");

const router = Router();

router.route("/").get(getAllCategory);
router.route("/").post(createCategory);

module.exports = router;
