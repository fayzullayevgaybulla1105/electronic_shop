import fs from 'fs'
import path from 'path'

let categor = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'category.json'), 'utf-8')
categor = categor ? JSON.parse(categor) : []

// console.log(categor);

const all = () => {

    let catName = []
    for (let i in categor) {
        if (categor[i].categoryName) {
            catName.push({
                Category_id: categor[i].category_id,   
                CategoryName: categor[i].categoryName
            })
        }
    }

    return catName
}

const one = (categoryId) => {
    let catName = []
    for (let i in categor) {
        if (categor[i].category_id == categoryId) {
            catName.push({
                categoryId: categor[i].category_id,
                categoryName: categor[i].categoryName
            })
        }
    }
    return catName
}


export default {
    all,
    one
}