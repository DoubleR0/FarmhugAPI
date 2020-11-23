import User from "../models/user.js";

import bcrypt from 'bcryptjs';

import JWT from 'jsonwebtoken';
import gql from 'graphql-tag'
// import ApolloClient from 'apollo-boost';
import apollo from 'apollo-cache-inmemory';
const { InMemoryCache } = apollo
import apolloBoost from 'apollo-boost';
const { ApolloClient } = apolloBoost
const signToken = user => {
    return JWT.sign({
        iss: 'farmhug',
        sub: user.id,
        iat: new Date().getTime(), //current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day
    }, 'wefwfewfasdf2924jfrijioesdfwafjkapiojfdafgadgdfasgagggadsfgsdfgsdfge3rg34g3gwqgwsbewgewrgegegeg')
}

// const client = new ApolloClient({
//     uri: 'http://localhost:4000/grapql',
//     cache: new InMemoryCache()
// })

// Create local User: POST
const create_user = async (req, res) => {
    try {
        const { username, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const user = {
            username: username,
            password: hashPassword,
            firstname: "",
            lastname: "",
            line_account: "",
            email: "",
            imageURL: "",
            type: "",
            role: "NONE",
            farm_id: "",
        };

        const isUser = await User.findOne({ username: user.username})
        if(isUser){
            res.status(400).send({
                error: 'username already exits'
            });
        }else{
            User.create(user)
            .then(newUser => {
                res.sendStatus(200)
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating user."
                });
            });
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error
        });
    }

};

// login via local passport
const login = async (req, res, next) => {
    // Validate request
    const token = signToken(req.user)
    res.json(200, {
        token
    })
    console.log('login successful : ', new Date())

};

export default {
    login: login,
    create_user: create_user
}