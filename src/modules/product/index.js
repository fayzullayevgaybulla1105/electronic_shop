import express from 'express'
// import { GET, POST, DELETE } from './controller.js'
import { productQuery } from '../../post/productQuery.js'
// import { prod, productCat, productSub } from './controller.js'
const router = express.Router()

router.route('/product')
    // users degan route mizga .get degan buyruq kelsa GET degan controller ishlaydi.
    .get(productQuery)



export default router