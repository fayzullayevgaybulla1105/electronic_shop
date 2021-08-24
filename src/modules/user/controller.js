import model from './model.js'



const USERS = (req, res) => res.json(model.all())
const USER = (req, res) => res.json(model.one(req.params.userId))
// const DELETE = (req, res)=> res.send('users')


export   {
    // GET, POST,DELETE
    USER, 
    USERS
}