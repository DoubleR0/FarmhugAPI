import mongoose from 'mongoose';

const Schema = mongoose.Schema
const locationSchema = new Schema({
    latitude : {type: Number},
    longitude : {type: Number},
})

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
    location : {type: locationSchema},
    createdAt: {type: String},
    watercheck : {type: Number},
    foodConsume : {type: Number},
    employee : {type: Number},
}, { versionKey: false })

const data = mongoose.model('Farm', dataSchema, 'farm')

export default data;