import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    detail : {type: String},
    farm_id : {type: String},
    cage_id : {type: String},
    stall_id : {type: String},
    type : {type: String},
    alertDate : {type: Date},
    updatedAt : {type: Date},
    status : {type: String},
    creater_id : {type: String},
})

const data = mongoose.model('Activity', dataSchema, 'activity')

export default data;