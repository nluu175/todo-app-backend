const tasksRouter = require("express").Router();
const Task = require("../models/task");
const logger = require("../utils/logger");

const {
  getTasks,
  postTasks,
  getOneTaskById,
  deleteOneTaskById,
  updateOneById,
} = require("../controllers/tasksController");

tasksRouter.get("/", getTasks);

tasksRouter.post("/", postTasks);

tasksRouter.get("/:id", getOneTaskById);

tasksRouter.put("/:id", updateOneById);

tasksRouter.delete("/:id", deleteOneTaskById);

module.exports = tasksRouter;
