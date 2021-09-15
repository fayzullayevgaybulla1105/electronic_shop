import fs from 'fs'
import path from 'path'


const SUBCATEGORY = (req, res) => {
  if (!req.headers.token) throw 'The token required!'
  let data = req.body


    let categories = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'category.json'), "utf-8")
    let subcategories = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'subcategory.json'), "utf-8")
    
    let { subCategoryName, category_id } = data

    categories = categories ? JSON.parse(categories) : []
    subcategories = subcategories ? JSON.parse(subcategories) : []
    console.log(categories);
   
    let subCategory_id = subcategories.length ? subcategories[subcategories.length - 1].subCategory_id + 1 : 1
    let newsubcategory = { subCategory_id, subCategoryName, category_id }
   
    subcategories.push(newsubcategory)
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', 'subcategory.json'), JSON.stringify(subcategories, null, 4))
    return res.end('finished')
  
}

export {
  SUBCATEGORY
}