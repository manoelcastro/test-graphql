import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';

import { routes } from './routes';

const app = express();
app.use(express.json());

const schema = async () => buildSchema();
const graphqlServer = new ApolloServer({});

graphqlServer.applyMiddleware({ app });

app.use(routes);

export { app };
