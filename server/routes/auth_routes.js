import express from 'express';
import { register , login , logout, isAuthenticated } from "../controllers/user_controller/user_auth.js";
import { userAuth } from '../middlewares/auth_mw.js';

const auth_router = express.Router();

auth_router.post('/register',register);
auth_router.post('/login',login);
auth_router.post('/logout',logout);
auth_router.get('/is-auth',userAuth,isAuthenticated);

export {auth_router};