const tasksRouter = require("express").Router();
const Task = require("../Models/task");
const logger = require("../Utils/logger");

tasksRouter.get("/", async (request, response, next) => {
  const allTasks = await Task.find({});
  response.json(allTasks);
});

tasksRouter.post("/", (request, response, next) => {
  const body = request.body;
  const task = new Task({
    content: body.content,
    createdDate: new Date(),
    dueDate: new Date(),
    important: body.important || false,
  });

  task
    .save()
    .then((savedTask) => {
      logger.info(savedTask.toJSON());
      response.json(savedTask.toJSON());
    })
    .catch((error) => next(errror));
});

tasksRouter.get("/:id", async (request, response) => {
  const { id } = request.params;
  const getTask = await Task.findById(id).exec();
  logger.info(getTask);
  response.json(getTask);
});

tasksRouter.delete("/:id", (request, response) => {
  console.log("Received Delete request!");
  // logger.info(request.params.id);

  // await Task.findByIdAndRemove(id)
  //   .then(() => {
  //     response.status(204).end();
  //   })
  //   .catch((error) => next(error));
});

module.exports = tasksRouter;
