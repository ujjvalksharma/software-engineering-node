import {Request, Response, Express} from "express";
import UserDao from "../daos/UserDao";
import UserControllerI from "../interfaces/UserControllerI";
/*
export default class UserController implements UserControllerI {
   app: Express; 
   userDao: UserDao;
   constructor(app: Express) {
       this.app = app;
       this.userDao = new UserDao();
       this.app.get('/users/test', this.checkHealthy);
       this.app.get('/users', this.findAllUsers);
       this.app.get('/users/:userid', this.findUserById);
       this.app.post('/users', this.createUser);
       this.app.delete('/users/:userid', this.deleteUser);
       this.app.put('/users/:userid', this.updateUser);
   }
   findAllUsers = (req: Request, res: Response) =>
       this.userDao.findAllUsers()
           .then(users => res.json(users));
   findUserById = (req: Request, res: Response) =>
       this.userDao.findUserById(req.params.userid)
           .then(user => res.json(user));
   createUser = (req: Request, res: Response) =>
       this.userDao.createUser(req.body)
           .then(user => res.json(user));
   deleteUser = (req: Request, res: Response) =>
       this.userDao.deleteUser(req.params.userid)
           .then(status => res.json(status));
   updateUser = (req: Request, res: Response) =>
       this.userDao.updateUser(req.params.userid, req.body)
           .then(status => res.json(status));

   checkHealthy =(req: Request, res: Response)=>{
                res.send("I am healthy")
               console.log('I am healthy');
             //  return "I am healthy";
           }        
}
*/
/*
const userDao = new UserDao();
module.exports = (app: Express) => { 

 
   const checkHealthy =(req: Request, res: Response)=>{
        res.send("I am healthy")
       console.log('I am healthy');
     //  return "I am healthy";
   }    

  const findAllUsers = (req: Request, res: Response) =>
   userDao.findAllUsers()
       .then(users => res.json(users));
const findUserById = (req: Request, res: Response) =>
   userDao.findUserById(req.params.userid)
       .then(user => res.json(user));
const createUser = (req: Request, res: Response) =>{
    console.log(' I am getting user body ');
    console.log(JSON.stringify(req.body));
    userDao.createUser(req.body)
    .then(user => res.json(user));
};
   
const deleteUser = (req: Request, res: Response) =>
   userDao.deleteUser(req.params.userid)
       .then(status => res.json(status));
const updateUser = (req: Request, res: Response) =>
   userDao.updateUser(req.params.userid, req.body)
       .then(status => res.json(status));

    app.get('/users/test', checkHealthy);
    app.get('/users', findAllUsers);
    app.get('/users/:userid', findUserById);
    app.post('/users', createUser);
    app.delete('/users/:userid', deleteUser);
    app.put('/users/:userid', updateUser);
  
        

}
*/

export default class UserController implements UserControllerI {
    private static userDao: UserDao = UserDao.getInstance();
    private static userController: UserController | null = null;

    public static getInstance = (app: Express): UserController => {
        if(UserController.userController === null) {
            UserController.userController = new UserController();

            app.get("/users",
                UserController.userController.findAllUsers);
            app.get("/users/:uid",
                UserController.userController.findUserById);
            app.post("/users",
                UserController.userController.createUser);
            app.put("/users/:uid",
                UserController.userController.updateUser);
            app.delete("/users/:uid",
                UserController.userController.deleteUser);

        }
        return UserController.userController;
    }

    private constructor() {}

    findAllUsers = (req: Request, res: Response) =>
        UserController.userDao.findAllUsers()
            .then((users) => res.json(users));

    findUserById = (req: Request, res: Response) =>
        UserController.userDao.findUserById(req.params.uid)
            .then((user) => res.json(user));
    

    createUser = (req: Request, res: Response) =>
        UserController.userDao.createUser(req.body)
            .then((user) => res.json(user));
    

    updateUser = (req: Request, res: Response) =>
        UserController.userDao.updateUser(req.params.uid, req.body)
            .then((status) => res.send(status));
    
    deleteUser = (req: Request, res: Response) =>
        UserController.userDao.deleteUser(req.params.uid)
            .then((status) => res.send(status));


};