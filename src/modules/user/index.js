import express from 'express'
// import { GET, POST, DELETE } from './controller.js'
import { USERS , USER} from './controller.js'
const router = express.Router()

router.route('/users')
    // users degan route mizga .get degan buyruq kelsa GET degan controller ishlaydi.
    .get(USERS)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)

router.route('/users/:userId')
    // users degan routemizga userId ni berayabmiz. route userId bo`yicha ishlaydi
    .get(USER)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)


export default router