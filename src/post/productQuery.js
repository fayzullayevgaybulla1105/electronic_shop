import fs from 'fs'
import path from 'path'


const productQuery = (req, res) => {
	let getdb = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'product.json'), 'utf-8')
	getdb = getdb ? JSON.parse(getdb) : []
    

	let storage = []
	for (let i in getdb) {
		let counter = 0
		let length = 0
		for (let j in req.query) {
			if (req.query[j] === getdb[i][j]) {
				counter++
			}
			length += 1
		}
		if (counter === length) {
			storage.push(getdb[i]);
		}
	}
	res.send(storage)
}

export {
    productQuery
}