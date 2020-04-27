import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from 'react-notify-toast';
import App from './App';
import client from './appollo/index';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Notifications />
      <App />
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
