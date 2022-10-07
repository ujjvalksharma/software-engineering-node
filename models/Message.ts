import User from "./User";

export default class Message {
    private text: String = '';
    private sentOn: Date = new Date();
    private sender: User | null = null;
    private reciver: User | null = null;
 }