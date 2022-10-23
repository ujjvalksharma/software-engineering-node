import mongoose from "mongoose";
import LikeSchema from "./LikeSchema";

const likeSchema = mongoose.model('LikeModel', LikeSchema);
export default likeSchema;