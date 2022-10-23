import User from "./User";

export default class Message {
    private message: String = '';
    private to: Date = new Date();
    private from: User | null = null;
    private sendOn: User | null = null;
 }