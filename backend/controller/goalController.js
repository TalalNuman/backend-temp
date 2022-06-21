const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");
const User = require("../models/userModel");
const { protect } = require("../middleware/errorMiddleware");

// @desc Get Goal
// @route Get /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

// @desc Set Goal
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("No message");
  }
  const goals = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goals);
});
// @desc update Goal
// @route Update /api/goals
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  const user = await User.findById({ user: req.user.id });
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goal.user.toString() !== user._id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ message: updatedGoal });
});

// @desc delete Goal
// @route DELETE /api/goals
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  // const user = await User.findById({ user: "62afbab7de75d1b85e6a23f5" });
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not Authorized");
  }
  //   const deletedGoal = await Goal.findByIdAndDelete(id);
  await goal.remove();
  res.status(200).json({ message: id });
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
