import model from './model.js'



const subCategories = (req, res) => res.json(model.all())
let subCategory = (req, res) => res.json(model.one(req.params.subCategoryId))
// const DELETE = (req, res)=> res.send('users')


export   {
    // GET, POST,DELETE
    subCategory, 
    subCategories
}