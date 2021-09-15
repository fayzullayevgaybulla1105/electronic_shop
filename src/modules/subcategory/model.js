import fs from 'fs'
import path from 'path'
// import { subCategory } from './controller'

let categor = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'subcategory.json'), 'utf-8')
categor = categor ? JSON.parse(categor) : []
// console.log(categor);  
const all = () => {      

    let subcatName = []
    for (let i in categor) {
            subcatName.push({
                subCategoryId: categor[i].subCategory_id,
                subCategoryName: categor[i].subCategory_name,
                categoryId: categor[i].category_id
            })

    }
        // console.log(subcatName);  
    return subcatName

}

    
     
const one = (subCategoryId) => {
    let subcatName = []
    let findedSubcat = categor.find(el=> el.subCategory_id == +subCategoryId)
    subcatName.push(findedSubcat)

    return subcatName
}


export default {
    all,
    one
}