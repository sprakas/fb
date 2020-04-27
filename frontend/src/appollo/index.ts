import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import { notify } from 'react-notify-toast';
import cache from './cache';
import mutations from './mutations';
import typeDefs from './schema';
const httpLink = createHttpLink({ uri: 'http://localhost:4300/graphql' });

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) { graphQLErrors.map(({ message }) => notify.show(message, 'error')); }
  });

const link = ApolloLink.from([
  errorLink,
  httpLink
]);

export default new ApolloClient({
  link,
  cache,
  resolvers: {
    Mutation: { ...mutations }
 },
 typeDefs,
 connectToDevTools: true
});
