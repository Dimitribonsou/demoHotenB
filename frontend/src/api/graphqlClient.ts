import { GraphQLClient } from 'graphql-request';

const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql';

export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);
