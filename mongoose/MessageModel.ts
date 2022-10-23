import mongoose from "mongoose";
import MessageSchema from "./MessageSchema";

const messageSchema = mongoose.model('MessageModel', MessageSchema);
export default messageSchema;