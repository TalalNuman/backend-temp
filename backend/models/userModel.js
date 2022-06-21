const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please a name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter the Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter the password"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userModel);
