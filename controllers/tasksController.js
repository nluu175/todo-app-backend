const Task = require("../models/task");
const logger = require("../utils/logger");

const getTasks = async (request, response, next) => {
  const allTasks = await Task.find({});
  response.json(allTasks);
};

const postTasks = async (request, response, next) => {
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
    .catch((error) => next(error));
};

const getOneTaskById = async (request, response) => {
  const { id } = request.params;
  const getTask = await Task.findById(id).exec();
  logger.info(getTask);
  response.json(getTask);
};

const deleteOneTaskById = async (request, response) => {
  const { id } = request.params;
  logger.info(id);

  await Task.findByIdAndRemove(id)
    .then(() => {
      response.status(200).end();
    })
    .catch((error) => next(error));
};

const updateOneById = async (request, response) => {
  logger.info(request.body);
  logger.info(request.params);
};

module.exports = {
  getTasks: getTasks,
  postTasks: postTasks,
  getOneTaskById: getOneTaskById,
  deleteOneTaskById: deleteOneTaskById,
  updateOneById: updateOneById,
};
