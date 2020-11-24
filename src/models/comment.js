import mongoose from 'mongoose';

const Schema = mongoose.Schema

const dataSchema = new Schema({
    farm_id : {type: String},
    user_id : {type: String},
    post_id : {type: String},
    detail : {type: String},
    createdAt: {type: String},
    updatedAt : {type: String},
}, { versionKey: false })

const data = mongoose.model('Comment', dataSchema, 'comment')

export default data;