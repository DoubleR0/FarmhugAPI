import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    type : {type: String},
    name : {type: String},
    farm_id : {type: String},
    stall_id : {type: String},
    gene : {type: String},
    weight : {type: Number},
    height : {type: Number},
    dob : {type: String},
    breed : {type: String},
    sex : {type: String},
    imageUrl : {type: String},
}, { versionKey: false })

const data = mongoose.model('Cowproperty', dataSchema, 'cowproperty')

export default data;