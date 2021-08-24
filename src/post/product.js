import fs from 'fs'
import path from 'path'


const PRODUCT = (req, res) => {
	if (!req.headers.token) throw 'The token required!'
	let data = req.body

		let { subCategory_id, model, product_name, color, price } = data

		let products = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'product.json'), "utf-8")
		products = products ? JSON.parse(products) : []

		let product_id = products.length ? products[products.length - 1].product_id + 1 : 1
		let newProduct = { subCategory_id, product_id, product_name, color, price, model }
		products.push(newProduct)
		fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'product.json'), JSON.stringify(products, null, 4))
		return res.end('saved...')
	
}

export {
	PRODUCT
}