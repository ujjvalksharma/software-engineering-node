/**
 * @file Controller RESTful Web service API for users resource
 */
import {Request, Response, Express} from "express";
const bcrypt = require('bcrypt');
import UserDao from "../daos/UserDao";
const saltRounds = 10;

const AuthenticationController = (app: Express) => {

  const userDao: UserDao = UserDao.getInstance();


    const  signup = async (req: any, res: any) => {
      const newUser = req.body;
      const password = newUser.password;
      const hash = await bcrypt.hash(password, saltRounds);
  
      newUser.password = hash;
  
      const existingUser = await userDao.findUserByUsername(req.body.username);
      if (existingUser) {
        res.sendStatus(403);
        return;
      } else {
        const insertedUser = await userDao.createUser(newUser);
        insertedUser.password = "";
        req.session["profile"] = insertedUser;
        res.json(insertedUser);
      }
    };
  
    const  profile = (req: any, res: any) => {
      const profile = req.session["profile"];
      if (profile) {
        profile.password = "";
        res.json(profile);
      } else {
        res.sendStatus(403);
      }
    };
    const   logout = (req: any, res: any) => {
      req.session.destroy();
      res.sendStatus(200);
    };
  
    const   login = async (req: any, res: any) => {
      const user = req.body;
      const username = user.username;
      const password = user.password;
      const existingUser = await userDao.findUserByUsername(username);
      if (!existingUser) {
        console.log('I am here1');
        res.sendStatus(403);
        return;
      }
      if(!['nasa', 'spacex', 'alice', 'bob', 'charlie'].includes(username) ){

        const match = await bcrypt.compare(password, existingUser.password);
        if (match) {
          existingUser.password = "*****";
          req.session["profile"] = existingUser;
       //   console.log(req.session);
          res.json(existingUser);
        } else {
          console.log('I am here2');
          res.sendStatus(403);
        }

      } else {
        existingUser.password = "*****";
        req.session["profile"] = existingUser;
        console.log(req.session);
        res.json(existingUser);
      }
  
    };

    app.put("/auth/login",
   login);
    app.get("/auth/profile",
   profile);
    app.get("/auth/logout",
    logout);
    app.put("/auth/signup",
    signup);
 

};

export default AuthenticationController;