import gql from 'graphql-tag';

export const GET_CURRENTUSER = gql`
 query {
  currentUser @client {
    userId
    mail
  }
 }
`;

export const GET_TODOS = gql`
query {
  todos @client {
    id
    text
    completed
  }
}
`;
