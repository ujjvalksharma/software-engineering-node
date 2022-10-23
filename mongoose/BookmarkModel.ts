import mongoose from "mongoose";
import BookmarkSchema from "./BookmarkSchema";

const bookmarkSchema = mongoose.model('BookmarkModel', BookmarkSchema);
export default bookmarkSchema;