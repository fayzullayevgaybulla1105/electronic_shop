
import validation from "../library/validation.js";
import { read } from '../library/orm.js'

export default function (req, res, next) {
    try {
        let { username, password } = req.body
        if (!username || !validation.username(username)) throw 'The username is required!'
        if (!password || !validation.password(password)) throw 'The password is required!'

        let users = read('users')
        let user = users.find(user => user.username == username && user.password == password)
        if (!user) throw 'The wrong password or username not found!'
        req.user = user
        next()

    } catch (err) {
        res.status(401).json({ status: 401, message: err })
    }
}