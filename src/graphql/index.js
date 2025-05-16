const { mergeTypeDefs } = require('@graphql-tools/merge');
const { mergeResolvers } = require('@graphql-tools/merge');
const taskTypeDefs = require('./schema/task.schema');
const taskResolvers = require('./resolvers/task.resolver');


const typeDefs = mergeTypeDefs([ taskTypeDefs]);
const resolvers = mergeResolvers([taskResolvers]);

module.exports = {
  typeDefs,
  resolvers,
};
