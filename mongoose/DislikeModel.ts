 /**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose";
import LikeSchema from "./DislikeSchema";

const dislikeModel = mongoose.model('DislikeModel', LikeSchema);
export default dislikeModel;