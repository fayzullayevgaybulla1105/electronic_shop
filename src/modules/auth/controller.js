import model from './model.js'
import JWT from '../../library/jwt.js'

const registerController = (req, res) => {
    try {
        let user = model.register(req.body)
        if (user) {
            res.status(201).json({
                status: 201,
                message: 'The user succesfully registered.',
                token: JWT.sign(user.user_id)
            })
        } else throw 'Something went wrong..'

    } catch (err) {
        console.log(err);
    }
}
const loginController = (req, res) => {
    res.status(200).json({
        status:200,
        message:'The user succesfully logged in..',
        toke:JWT.sign(req.user.user_id)

    })
 }

 const USERS = (req, res) => res.json(model.all())
const USER = (req, res) => res.json(model.one(req.params.userId))


export {
    registerController,
    loginController
}