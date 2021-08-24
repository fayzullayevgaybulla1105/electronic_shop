import model from './model.js'



const prod = (req, res) => res.json(model.all())
// const Category = (req, res) => res.json(model.one(req.params.productId))
// const DELETE = (req, res)=> res.send('users')


export   {
    // GET, POST,DELETE
    // Category, 
    prod
}