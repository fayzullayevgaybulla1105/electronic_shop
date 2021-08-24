import model from './model.js'



const Categories = (req, res) => res.json(model.all())
const Category = (req, res) => res.json(model.one(req.params.categoryId))


export   {
    Category, 
    Categories
}