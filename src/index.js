const startApolloServer = require('./app');

startApolloServer().then(app => {
  app.listen('4000', () => {
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  });
});