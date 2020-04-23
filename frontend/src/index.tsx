import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createHttpLink } from 'apollo-link-http';
import Notifications, {notify} from 'react-notify-toast';

export const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) { graphQLErrors.map(({ message }) => notify.show(message, 'error')); }
});

export const httpLink = createHttpLink({ uri: 'http://localhost:4300/graphql' });

const link = ApolloLink.from([
  errorLink,
  httpLink
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Notifications />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
