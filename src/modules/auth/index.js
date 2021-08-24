
//configuring router
import express from 'express'
const router = express.Router()


//loading controllers
import { registerController } from './controller.js'
import { loginController } from './controller.js'

//loading middleware
import registerValidation from '../../middleware/authValidation.js'
import loginValidation from '../../middleware/loginValidation .js'


//handling routes
router.route('/register')
    .post(registerValidation, registerController)


router.route('/login')
    .post(loginValidation, loginController)


    


export default router