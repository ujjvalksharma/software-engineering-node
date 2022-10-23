import mongoose from "mongoose";
import FollowSchema from "./FollowSchema";

const followSchema = mongoose.model('FollowModel', FollowSchema);
export default followSchema;