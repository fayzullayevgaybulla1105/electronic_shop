import fs from 'fs'
import path from 'path'


const CATEGORY = (req, res) => {
  if (!req.headers.token) throw 'The token required!'
  let data = req.body
  let { categoryName } = data

  let categories = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'category.json'), "utf-8")
  categories = categories ? JSON.parse(categories) : []
  console.log(categories)
  let category_id = categories.length ? categories[categories.length - 1].category_id + 1 : 1
  let newcategory = { category_id, categoryName }
  categories.push(newcategory)
  fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'category.json'), JSON.stringify(categories, null, 4))
  return res.send('finished')
}

export {
  CATEGORY
}