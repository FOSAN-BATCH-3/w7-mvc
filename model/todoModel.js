let fs = require ('fs')

class Todomodel {
    static listTodoE (cb) {
        fs.readFile('./employees.json', 'utf8', (err, data)=> {
            if (err) {
                console.log(err)
            } else {
                cb(JSON.parse(data))
            }
        })
    }

    static listTodoP (cb) {
        fs.readFile('./patients.json', 'utf8', (err, data)=> {
            if (err) {
                console.log(err)
            } else {
                cb(JSON.parse(data))
            }
        })
    }

    static saveDataE (data) {
        fs.writeFile('./employees.json', JSON.stringify(data, null, 2), ()=> {
        })
    }

    static saveDataP (data) {
        fs.writeFile('./patients.json', JSON.stringify(data, null, 2), ()=> {
        })
    }
}

module.exports = Todomodel