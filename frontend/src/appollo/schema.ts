import gql from 'graphql-tag';

const typeDefs = gql`
extend type TODO {
      id: Number!
      text: String!
      completed: Boolean!
  }
  extend type CURRENTUSER {
    userId: String!
    email: String!
  }
  extend type Query {
    todos: [TODO!]
    currentUser: CURRENTUSER!
  }
  extend type Mutation {
    addTodo(text: String!): TODO
    addUserData(userId: String!, mail: String!): CURRENTUSER
  }
`;

export default typeDefs;
