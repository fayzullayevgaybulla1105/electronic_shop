import fs from 'fs'
import path from 'path'

const read = (tableName) => {
    let data = fs.readFileSync(path.join(process.cwd(), 'src', 'database', tableName + '.json'), 'utf-8')
    // buffer from UTF-8
    
    data = data ? JSON.parse(data) : []
    return data
}

const write = (tableName, data) => {
    fs.writeFileSync(path.join(process.cwd(), 'src', 'database', tableName + '.json'), JSON.stringify(data, null, 4))
    return true
}

export {    
    read, write
}