import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const tuitSchema = mongoose.model('TuitSchema', TuitSchema);
export default tuitSchema;