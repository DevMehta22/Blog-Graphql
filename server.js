require('dotenv').config();
const express = require('express');
const {ApolloServer}= require('apollo-server-express');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const {pool} = require('./db/db');

const app = express();

const Server = new ApolloServer({typeDefs,resolvers});

async function startServer() {
    await Server.start();
    Server.applyMiddleware({ app });
  }
  
  startServer().then(() => {
    const port = process.env.port || 3000;
  
    app.listen(port, async () => {
      console.log(`Server running at http://localhost:${port}${Server.graphqlPath}`);
  
      // Test database connection
      try {
        const Pool = pool.promise();
        await Pool.query('SELECT 1');
        console.log('Database connected');
      } catch (error) {
        console.error('Database connection error:', error.message);
      }
    });
  });