const tasksRouter = require("express").Router();
const Task = require("../models/task");
const logger = require("../utils/logger");

const {
  getTasks,
  postTasks,
  getOneTaskById,
  deleteOneTaskById,
} = require("../controllers/tasksController");

tasksRouter.get("/", getTasks);

tasksRouter.post("/", postTasks);

tasksRouter.get("/:id", getOneTaskById);

tasksRouter.delete("/:id", deleteOneTaskById);

module.exports = tasksRouter;
