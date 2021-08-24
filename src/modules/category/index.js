import express from 'express'
// import { GET, POST, DELETE } from './controller.js'
import {  Categories, Category} from './controller.js'
const router = express.Router()

router.route('/categories')
    // users degan route mizga .get degan buyruq kelsa GET degan controller ishlaydi.
    .get(Categories)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)

router.route('/categories/:categoryId')
    // users degan routemizga userId ni berayabmiz. route userId bo`yicha ishlaydi
    .get(Category)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)


export default router