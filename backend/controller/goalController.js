const asyncHandler = require("express-async-handler");
// @desc Get Goal
// @route Get /api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `getGuhoals` });
});
// @desc Set Goal
// @route POST /api/goals
// @access private
const setGoals = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.message) {
    res.status(400);
    throw new Error("No message");
  }
  res.status(200).json({ message: `Goal Created` });
});
// @desc update Goal
// @route Update /api/goals
// @access private
const updateGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goals Upadated Succesfully of ID ${req.params.id}` });
});
// @desc delete Goal
// @route DELETE /api/goals
// @access private
const deleteGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Goals Delete Succesfully of ID ${req.params.id}` });
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
