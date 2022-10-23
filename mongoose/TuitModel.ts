import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";

const tuitSchema = mongoose.model('TuitModel', TuitSchema);
export default tuitSchema;