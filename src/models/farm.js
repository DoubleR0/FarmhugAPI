import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    address : {type: String},
    description : {type: String},
    imageURL : {type: String},
    type : {type: String},
    location : {type: String},
    distance: {type: Number},
    capacity : {type: Number},
    cow : {type: Number},
    area : {type: String},
    location : {type: String},
    createdAt: {type: String},
    watercheck : {type: Number},
    foodConsume : {type: Number},
    employee : {type: Number},
})

const data = mongoose.model('Farm', dataSchema, 'farm')

export default data;