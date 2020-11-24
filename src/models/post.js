import mongoose from 'mongoose';

const Schema = mongoose.Schema

const dataSchema = new Schema({
    farm_id : {type: String},
    user_id : {type: String},
    topic : {type: String},
    detail : {type: String},
    isPublic : {type: Boolean},
    comments : {type: String},
    createdAt: {type: String},
    updatedAt : {type: String},
}, { versionKey: false })

const data = mongoose.model('Post', dataSchema, 'post')

export default data;