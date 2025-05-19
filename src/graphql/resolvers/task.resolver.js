const taskService = require('../../services/task.service');

const taskResolvers = {
  Query: {
    getAllTasks: async () => await taskService.getAllTasks(),
    getTaskById: async (_, { id }) => await taskService.getTaskById(id),
  },
  Mutation: {
    createTask: async (_, args) => await taskService.createTask(args),
    updateTask: async (_, { _id, ...rest }) => await taskService.updateTask(_id, rest),
    deleteTask: async (_, { _id }) => await taskService.deleteTask(_id),
  }
};

module.exports = taskResolvers;