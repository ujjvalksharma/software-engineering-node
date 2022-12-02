/**
 * @file Implements mongoose schema for likes
 */
import mongoose, {Schema} from "mongoose";
import Dislike from "../models/Dislike";

/**
 * @typedef LikeSchema represents the tuit liked by a user
 * @property {string} postedOn represents date when tuit was liked by that person
 * @property {string} dislikedBy represents the person who liked the tuit
 * @property {string} dislikedTuit represents the tuit which got liked
 */
const DislikeSchema = new mongoose.Schema<Dislike>({
    postedOn: {type: Date, default: Date.now}, 
    dislikedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    dislikedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "dislikes"});
export default DislikeSchema;