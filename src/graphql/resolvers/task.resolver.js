const taskService = require('../../services/task.service');

const taskResolvers = {
  Query: {
    getAllTasks: async () => await taskService.getAllTasks(),
    getTaskById: async (_, { id }) => await taskService.getTaskById(id),
  },
  Mutation: {
    createTask: async (_, args) => await taskService.createTask(args),
    updateTask: async (_, { id, ...rest }) => await taskService.updateTask(id, rest),
    deleteTask: async (_, { id }) => await taskService.deleteTask(id),
  }
};

module.exports = taskResolvers;