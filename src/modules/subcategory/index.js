import express from 'express'
// import { GET, POST, DELETE } from './controller.js'
import {  subCategories, subCategory} from './controller.js'
const router = express.Router()

router.route('/subcategories')
    // users degan route mizga .get degan buyruq kelsa GET degan controller ishlaydi.
    .get(subCategories)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)

router.route('/subcategories/:subCategoryId')
    // users degan routemizga userId ni berayabmiz. route userId bo`yicha ishlaydi
    .get(subCategory)
    
    // .get('/users', GET)
    // .post(POST)
    // .delete(DELETE)


export default router