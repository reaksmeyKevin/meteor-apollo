import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import {resolvers} from '../imports/data/resolver';
import {typeDefs} from '../imports/data/schema';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({
  schema,
});