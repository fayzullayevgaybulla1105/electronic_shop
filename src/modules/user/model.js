import fs from 'fs'
import path from 'path'
// let users = [
//     { id: 1, username: "john", age: 25 },
//     { id: 2, username: "john", age: 25 },
//     { id: 3, username: "john", age: 25 },
//     { id: 4, username: "john", age: 25 }
// ]
let users = fs.readFileSync(path.join(process.cwd(), 'src', 'database', 'users.json'),'utf-8')
users = users?JSON.parse(users):[]

const all = () => {
    return users
}

const one = (userId) => {
    return users.find(user => user.user_id == userId)
}


export default {
    all,
    one
}