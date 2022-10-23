/**
 * @file Implements an Express Node HTTP server.
 */
import express, {Request, Response} from 'express';
import UserController from "./controllers/UserController";
import TuitController from "./controllers/TuitController";  
import LikeController from "./controllers/LikeController"; 
import MessageController from "./controllers/MessageController";     
import BookmarkController from "./controllers/BookmarkController";   
import FollowController from "./controllers/FollowController";     
import mongoose from "mongoose";
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/swe-a1');

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering 123!'));

    const userController = UserController.getInstance(app);
    const tuitController = TuitController.getInstance(app);
    const likeController = LikeController.getInstance(app);
    const bookmarkController = BookmarkController.getInstance(app);
    const messageController = MessageController.getInstance(app);  
    const followController = FollowController.getInstance(app);  

/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;

app.listen(process.env.PORT || PORT);

//TO DO: Write JS doc
