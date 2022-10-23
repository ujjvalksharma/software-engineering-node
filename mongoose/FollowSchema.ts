import mongoose, {Schema} from "mongoose";
import Follow from '../models/Follow';

const FollowSchema = new mongoose.Schema<Follow>({
    followedOn: String,
    userFollowed: {type: Schema.Types.ObjectId, ref: "UserModel"},
    userFollowing: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: "follwers"});
export default FollowSchema; 