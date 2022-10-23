/*import mongoose from "mongoose";
import Tuit from "../models/Tuit";
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: String,
    posted_on: String,
    posted_by: {type: Schema.Types.ObjectId, ref: "UserModel"}
}, {collection: 'tuits'});
export default TuitSchema; 
*/

import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: String,
    postedOn: String,
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "tuits"});
export default TuitSchema;