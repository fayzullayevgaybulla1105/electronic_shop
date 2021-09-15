import express from 'express'
import { host, PORT } from './config.js'
import authModule from './modules/auth/index.js'
import formData from 'express-form-data'
import userModule from './modules/user/index.js'
import categoryModule from './modules/category/index.js'
import subCategoryModule from './modules/subcategory/index.js'
import productModule from './modules/product/index.js'
import { SUBCATEGORY } from './post/subCatPost.js'
import { CATEGORY } from './post/catPost.js'
import { PRODUCT } from './post/product.js'
import { productQuery } from './post/productQuery.js'
// import { prod } from './modules/product/controller.js'

const server = express()

let router = express.Router()
//third party gloabl middlewares

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(express.text())
server.use(formData.parse())

//loading modules
server.use(authModule)
server.use(userModule)
server.use(categoryModule)
server.use(subCategoryModule)
server.use(productModule)

server.post('/subcategory', SUBCATEGORY)
server.post('/category', CATEGORY)
server.post('/product', PRODUCT)


// server.get('/products', prod)


server.listen(PORT, () => {
    console.log(`Backend server is running on http://${host}:${PORT}`);
})