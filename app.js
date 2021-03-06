const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const tasksRouter = require("./routes/tasksRouter");
const config = require("./utils/config");
const logger = require("./utils/logger");

const app = express();

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

// app.use(express.static("build"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/tasks", tasksRouter);

module.exports = app;
