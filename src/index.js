// import pkg from 'apollo-server';
import mongoose from 'mongoose';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';
import express from 'express';
import bodyParser from 'body-parser';
import apollo from 'apollo-server-express';
// import { makeExecutableSchema } from '@graphql-tools/schema';
import  pkg  from 'apollo-server';
const { makeExecutableSchema } = pkg;
const { graphqlExpress, graphiqlExpress } = apollo;
// const { makeExecutableSchema } = pkg;

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

const middleware = (req, res, next) => {
  /* ตรวจสอบว่า authorization คือ Boy หรือไม่*/
     if(req.headers.authorization === "Boy")
        next(); //อนุญาตให้ไปฟังก์ชันถัดไป
     else
        res.send("ไม่อนุญาต")
  }; 

const app = express();

app.use('/Authen', middleware, graphiqlExpress({ endpointURL: '/graphql' }));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(process.env.PORT || 3000, () => {
  console.log('Go to http://localhost:3000/ to run queries!');
});
