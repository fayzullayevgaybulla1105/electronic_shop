import fs from 'fs'
import path from 'path'
// import { subCategory } from './controller'

let categor = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'subcategory.json'), 'utf-8')
categor = categor ? JSON.parse(categor) : []
// console.log(categor);  
const all = () => {      

    let subcatName = []
    for (let i in categor) {
  
        // cons  ole.log(categor[i]);  
        // console.log(categor[i].subCategories);  
        // for (let j in categor[i].subCategories) {
            subcatName.push({
                subCategoryId: categor[i].subCategory_id,
                subCategoryName: categor[i].subCategory_name,
                categoryId: categor[i].category_id
            })

        // }  
    }
        console.log(subcatName);
    return subcatName

}


// const all = () => {

//     let subcatName = []
//     categor.map((item, index) =>{
//         item.subCategories.map((itm, idx) =>{
//             subcatName = itm.subCategoryName
//         })
//     })
// return subcatName
// }

const one = (subCategoryId) => {
    let subcatName = []
    for (let i in categor) {
        for (let j in categor[i].subCategories) {
            console.log(categor[i].subCategories[j]);
            if (categor[i].subCategories[j].subCategoryId == subCategoryId)
                subcatName.push({
                    subCategoryId: categor[i].subCategories[j].subCategoryId,
                    subCategoryName: categor[i].subCategories[j].subCategoryName
                })
        }
    }

    return subcatName
}


export default {
    all,
    one
}