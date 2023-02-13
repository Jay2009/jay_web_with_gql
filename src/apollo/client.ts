import {
  ApolloClient,
  InMemoryCache,
  gql,
  GraphQLRequest,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { cache, currentUserVar } from "./cache";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

// Authenticate using HTTP header
function contextSetter(_: GraphQLRequest, { headers }: any) {
  // get the authentication token from local storage if it exists
  const token = currentUserVar()?.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
}
export const Client = new ApolloClient({
  link: setContext(contextSetter).concat(httpLink),
  cache,
});
