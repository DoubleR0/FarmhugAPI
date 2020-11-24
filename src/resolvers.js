import authentication from './models/authentication.js'
import user from './models/user.js'
import farm from './models/farm.js'
import cowproperty from './models/cowproperty.js'
import activity from './models/activity.js'
import stall from './models/stall.js'
import post from './models/post.js'
import comment from './models/comment.js'


const resolvers = {
  Query: {
    async users() {
      return await user.find();
    },
    async user(root, {_id}) {
      return await user.findById(_id);
    },
    async authentications() {
      return await authentication.find();
    },
    async authentication(root, {_id}) {
      return await authentication.findById(_id);
    },
    async farms() {
      return await farm.find();
    },
    async farm(root, { _id}) {
      return await farm.findById(_id);
    },
    async cowpropertys() {
      return await cowproperty.find();
    },
    async cowproperty(root, { _id})  {
      return await cowproperty.find({$or:[{'farm_id':_id}, {'stall_id':_id}]});
    },
    async activitys() {
      return await activity.find();
    },
    async activity(root, { _id}) {
      return await activity.find({$or:[{'farm_id':_id}, {'stall_id':_id}, {'cage_id':_id}, {'creater_id':_id}]});
    },
    async stalls() {
      return await stall.find();
    },
    async stall(root, { _id}) {
      return await stall.find({'farm_id':_id});
    },
    async posts() {
      return await post.find();
    },
    async post(root, {_id}) {
      return await post.find({$or:[{'farm_id':_id}, {'user_id':_id}]});
    },
    async comments() {
      return await comment.find();
    },
    async comment(root, {_id}) {
      return await comment.find({$or:[{'farm_id':_id}, {'user_id':_id}, {'post_id':_id}]});
    },
  },
  Mutation: {
    async createUser(root, { input }) {
      return await user.create(input);
    },
    async updateUser(root, { _id, input }) {
      return await user.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteUser(root, { _id}) {
      return await user.findByIdAndRemove(_id);
    },
    async createAuthentication(root, { input }) {
      return await authentication.create(input);
    },
    async updateAuthentication(root, { _id, input }) {
      return await authentication.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteAuthentication(root, { _id}) {
      return await authentication.findByIdAndRemove(_id);
    },
    async createFarm(root, { input }) {
      return await farm.create(input);
    },
    async updateFarm(root, { _id, input }) {
      return await farm.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteFarm(root, { _id}) {
      return await farm.findByIdAndRemove(_id);
    },
    async createCowproperty(root, { input }) {
      return await cowproperty.create(input);
    },
    // async createManyCowproperty(root, { input }) {
    //   return await cowproperty.bulkWrite(input);
    // },
    async updateCowproperty(root, { _id, input }) {
      return await cowproperty.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteCowproperty(root, { _id}) {
      return await cowproperty.findByIdAndRemove(_id);
    },
    async createActivity(root, { input }) {
      return await activity.create(input);
    },
    async updateActivity(root, { _id, input }) {
      return await activity.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteActivity(root, { _id}) {
      return await activity.findByIdAndRemove(_id);
    },
    async createStall(root, { input }) {
      return await stall.create(input);
    },
    async updateStall(root, { _id, input }) {
      return await stall.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteStall(root, { _id}) {
      return await stall.findByIdAndRemove(_id);
    },
    async createPost(root, { input }) {
      return await post.create(input);
    },
    async updatePost(root, { _id, input }) {
      return await post.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deletePost(root, { _id}) {
      return await post.findByIdAndRemove(_id);
    },
    async createComment(root, { input }) {
      return await comment.create(input);
    },
    async updateComment(root, { _id, input }) {
      return await comment.findOneAndUpdate({
        _id
      }, input,{new:true});
    },
    async deleteComment(root, { _id}) {
      return await comment.findByIdAndRemove(_id);
    },
  },
};

export default resolvers;