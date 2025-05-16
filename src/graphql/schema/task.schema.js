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
    dueDate: String!
    priority: PriorityEnum!
    status: String!
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
      dueDate: String!
      priority: PriorityEnum!
      status: String!
      createdBy: String
    ): Task

    updateTask(
      id: ID!
      title: String
      description: String
      dueDate: String
      priority: PriorityEnum
      status: String
    ): Task

    deleteTask(id: ID!): Boolean
  }
`;

module.exports = taskTypeDefs;
