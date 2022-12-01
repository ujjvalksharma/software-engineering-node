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
import AuthenticationController from "./controllers/AuthenticationController";     
import mongoose from "mongoose";
const cors = require('cors')
const app = express();
const session = require("express-session");
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
         'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});
app.use(
    cors({
      credentials: true,
      origin: true,
      optionsSuccessStatus: 200,
    })
  );

let sess = {
    secret: "UJJVAL",
    cookie: {
      secure: false,
    },
  };
  app.use(session(sess));
app.use(express.json());


//mongoose.connect('mongodb://localhost:27017/swe-a1'); 
mongoose.connect('mongodb+srv://ujjval:ujjval@cluster0.zwdxz.mongodb.net/whiteboard?retryWrites=true&w=majority&ssl=true');
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
    const authenticationController = AuthenticationController.getInstance(app);  

    if (process.env.ENV === "PRODUCTION") {
        app.set("trust proxy", 1); // trust first proxy
        sess.cookie.secure = true; // serve secure cookies
      }   
/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;

app.listen(process.env.PORT || PORT);

//TO DO: Write JS doc
