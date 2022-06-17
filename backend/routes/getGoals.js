const express = require("express");
const router = express.Router();
// const Goal = require("../models/Goal");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController");

// router.get("/", getGoals);
// router.post("/", setGoals);
// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);

// Alternate

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);
module.exports = router;
