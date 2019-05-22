import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import App from './App';

const client = new ApolloClient({
  uri: 'https://metaphysics-production.artsy.net',
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById("root"));
