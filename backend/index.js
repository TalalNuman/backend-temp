const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

const port = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/goals", require("./routes/getGoals")); // getGoals
app.use("/api/users", require("./routes/user/user")); // User
app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
