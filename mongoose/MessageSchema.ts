import mongoose, {Schema} from "mongoose";
import Message from "../models/Message";
const MessageSchema = new mongoose.Schema<Message>({
    sentOn: String,
    message: String,
    to: {type: Schema.Types.ObjectId, ref: "UserModel"},
    from: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "messages"});
export default MessageSchema;