 /**
 * @file Implements mongoose model to CRUD
 * documents in the likes collection
 */
import mongoose from "mongoose";
import DislikeSchema from "./DislikeSchema";

const dislikeModel = mongoose.model('DislikeModel', DislikeSchema);
export default dislikeModel;