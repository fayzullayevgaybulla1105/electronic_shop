import fs from 'fs'
import path from 'path'

let categor = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'product.json'), 'utf-8')
categor = categor ? JSON.parse(categor) : []
// console.log(categor);


const all = () => {

    let productCharacter = []
    for (let i in categor) {
        // for (let j in categor[i]) {
        //     // console.log(categor[i].model);
        //     // productCharacter.push({
        //     //     subCategoryId: categor[i].subCategory_id,
        //     //     productName: categor[i].products[j].productName,
        //     //     model: categor[i].products[j].model,
        //     //     price: categor[i].products[j].price,
        //     //     color: categor[i].products[j].color,
        //     // })
        // }
        productCharacter.push({
            subCategoryId: categor[i].subCategory_id,
            productId: categor[i].product_id,
            productName: categor[i].product_name,
            model: categor[i].model,
            price: categor[i].price,
            color: categor[i].color,
        })
    }
    console.log(productCharacter);

    return productCharacter
}

const one = (categoryId) => {
    let catName = []
    for (let i in categor) {
        if (categor[i].categoryId == categoryId) {
            catName.push({ categoryId: categor[i].categoryId, categoryName: categor[i].categoryName })
        }
    }

    return catName
}


export default {
    all,
    one
}