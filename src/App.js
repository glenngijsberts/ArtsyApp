import { gql } from 'apollo-boost';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';

const GET_SEARCH_RESULTS = gql`
  query getSearchResults {
    search(query: "amsterdam", first: 2, entities: [CITY, ARTWORK]) {
      edges {
        node {
          displayLabel
        }
      }
    }
  }
`;

const App = () => {
    const { data, error, loading } = useQuery(GET_SEARCH_RESULTS);

    if (loading) {
      return <div>Loading...</div>;
    };

    if (error) {
      return <div>Error! {error.message}</div>;
    };

    return (
      <pre>
        {JSON.stringify(data)}
      </pre>
    );
}

export default App;
