const { gql } = require('apollo-server-express');

const taskTypeDefs = gql`
  enum PriorityEnum {
    Low
    Medium
    High
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    dueDate: String
    priority: PriorityEnum
    createdBy: String
  }

  type Query {
    getAllTasks: [Task]
    getTaskById(id: ID!): Task
  }

  type Mutation {
    createTask(
      title: String!
      description: String!
      dueDate: String
      priority: PriorityEnum
      createdBy: String
    ): Task

    updateTask(
      _id: ID!
      title: String
      description: String
      dueDate: String
      priority: PriorityEnum
    ): Task

    deleteTask(_id: ID!): Boolean
  }
`;

module.exports = taskTypeDefs;
