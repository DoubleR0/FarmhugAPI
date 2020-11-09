// import pkg from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'apollo-server-express';
import pkgj from 'graphql-tools';
const { makeExecutableSchema } = pkgj;
// const { ApolloServer } = pkg;
const { graphqlExpress, graphiqlExpress } = pkg;

const uri = "mongodb+srv://admin:admin@cluster0.ze1ps.gcp.mongodb.net/FarmhugDB?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true});

// const typeDefs = gql`
// type Query {
//   my_query:[counters]
//   hello: String
// }

// type counters{
// _id:String,
// seq:String
// }`

// const resolvers = {
//   Query: {
//     hello: () => {
//       return `hey sup ? `;
//     },
//     my_query: async () => {
//       values = await db.collection('counters').find().toArray().then(res => { return res });
//       return values
//     }
//   }
// };

// const server = new ApolloServer({ typeDefs, resolvers });
const schema = makeExecutableSchema({
  typeDefs, 
  resolvers,
})

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(process.env.PORT || 3000, () => {
  console.log('Go to http://localhost:3000/ to run queries!');
});
