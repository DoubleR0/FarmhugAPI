import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    detail : {type: String},
    farm_id : {type: String},
    animal_id : {type: String},
    stall_id : {type: String},
    type : {type: String},
    alertDate : {type: String},
    updatedAt : {type: String},
    status : {type: String},
    creater_id : {type: String},
},{ versionKey: false })

const data = mongoose.model('Activity', dataSchema, 'activity')

export default data;