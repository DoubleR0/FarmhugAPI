import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    currentAnimal : {type: Number},
    maximumAnimal : {type: Number},
    farm_id : {type: String},
    food : {type: Number},
    water : {type: Number},
    manure : {type: Number},
    updatedAt : {type: String},
    area : {type: String},
})

const data = mongoose.model('Stall', dataSchema, 'stall')

export default data;