import React from 'react'
import fetch from 'isomorphic-fetch'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

export const wrapRootElement = ({ element }) => {
  const client = new ApolloClient({
    fetch,
    uri: 'https://mymythos.org/graphql',
  })

  return <ApolloProvider client={client}>{element}</ApolloProvider>
}
