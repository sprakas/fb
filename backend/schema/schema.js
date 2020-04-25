import { buildSchema } from 'graphql';
const typeDefs = `
type Note {
  _id: ID!
  title: String!,
  date: Date,
  content: String!
}
scalar Date
type Query {
  allNotes: [Note]
  getNote(_id: ID!): Note
  login(email: String!, password: String!): AuthData!
}
input NoteInput {
    title: String!
    content: String!
}
input NoteUpdateInput {
    title: String
    content: String
 }
type Mutation {
    createNote(input: NoteInput) : Note
    updateNote(_id: ID!, input: NoteUpdateInput): Note
    deleteNote(_id: ID!) : Note
    createUser(userInput: UserInput): User
}
type User {
  _id: ID!
  email: String!
  password: String
}
type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}
input UserInput {
  email: String!
  password: String!
}
schema {
  query: Query
  mutation: Mutation
}
`;
export default buildSchema(typeDefs);
