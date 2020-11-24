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

import passport from 'passport'
import passportConf from './config/passport.js'
const passportJWT = passport.authenticate('jwt', { session: false });
const passportLocal = passport.authenticate('local',{ session: false});

import userController from './controller/userController.js'
import morgan from 'morgan';
const { create_user, login } = userController
 

const uri = "mongodb+srv://admin:admin@cluster0.ze1ps.gcp.mongodb.net/FarmhugDB?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})


const app = express();
const router = express.Router();
if(process.env.NODE_ENV = 'development'){
  app.use(morgan('dev'))
}
app.use(passport.initialize())
// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use('/user', router.post('/signup', create_user));
app.use('/user', router.post('/login',passportLocal, login));


app.use('/graphql', passportJWT, bodyParser.json(), graphqlExpress({ schema: schema }));
app.use('/', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(process.env.PORT || 3000, () => {
  console.log('Go to http://localhost:3000/ to run queries!');
});
