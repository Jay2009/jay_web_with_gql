import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const Client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

export default Client;
