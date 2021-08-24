import { read, write } from "../../library/orm.js";

const register = ({ username, age, password, contact, gender }) => {
    let users = read('users')
    let user_id = users.length ? users[users.length - 1].user_id + 1 : 1
    let newUser = { username, password, age, contact, gender, user_id }
    users.push(newUser)
    if (write('users', users)) {
        return newUser
    }
}


export default {
    register
}