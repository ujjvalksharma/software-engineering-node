import mongoose, {Schema} from "mongoose";
import Like from "../models/Like";
const TuitSchema = new mongoose.Schema<Like>({
    postedOn: String,
    likedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    likedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "likes"});
export default TuitSchema;