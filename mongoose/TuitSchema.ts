import mongoose from "mongoose";
const TuitSchema = new mongoose.Schema({
    tuit: String,
    posted_on: String,
    posted_by: String
}, {collection: 'tuit'});
export default TuitSchema;