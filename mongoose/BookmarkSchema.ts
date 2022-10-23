import mongoose, {Schema} from "mongoose";
import Bookmark from "../models/Bookmark";
const TuitSchema = new mongoose.Schema<Bookmark>({
    postedOn: String,
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"}
}, {collection: "bookmarks"});
export default TuitSchema;