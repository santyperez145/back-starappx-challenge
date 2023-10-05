import Router from 'express'
import User from '../models/User.js'
import read from '../controllers/auth/read.js'
import registerController from '../controllers/auth/registerController.js'
import loginController from '../controllers/auth/loginController.js'
import passport from '../middlewares/passport.js'
import signout from '../controllers/auth/signout.js'
import validator from '../middlewares/validator.js'
import userRegister from '../schemas/auth/register.js'
import accountExists from '../middlewares/accountExist.js'
import createHash from '../middlewares/createHash.js'
import userSignin from '../schemas/auth/userSiginSchema.js';
import accountNotExist from '../middlewares/accountNotExist.js';
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';
import signinToken from '../controllers/auth/signinToken.js'


let auth_router = Router()

auth_router.get('/', read)

//REGISTER
auth_router.post('/register', validator(userRegister), accountExists, createHash, registerController)

//LOGIN
auth_router.post('/login', validator(userSignin), accountNotExist, passwordIsOk, generateToken, loginController)

//LOGIN WITH TOKEN
auth_router.post('/logintoken', passport.authenticate('jwt', { session:false }), signinToken)

//LOGOUT
auth_router.post('/logout', passport.authenticate('jwt', { session:false }), signout)

export default auth_router