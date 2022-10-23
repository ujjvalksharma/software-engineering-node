import User from "./User";
import Tuit from "./Tuit";

export default class Like {
    private likedBy: User | null = null;
   private likedTuit: Tuit | null = null;
   private postedOn: Date = new Date(); 
}