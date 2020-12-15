let todoModel = require('../model/todoModel')

class Todoview {
    static registerE () {
        todoModel.listTodoE((data)=> {
            console.log(`save data success [username: ${data[data.length-1].username} job: ${data[data.length-1].job}]. Total employee: ${data.length}`)
        })
    }

    static loginE (name, pass) {
        todoModel.listTodoE((data)=> {
            let flag = false
            for (let i=0; i<data.length; i++) {
                if (data[i].username==name && data[i].password==pass) {
                    flag = true
                }
            }
            if (flag===true) {
                console.log(`user ${name} logged in succesfully`)
            } else {
                console.log('incorrect username/password')
            }
        })
    }

    static successAddpatients () {
        todoModel.listTodoP((data)=> {
            console.log(`data pasien berhasil ditambahkan, total pasien: ${data.length}`)
        })
    }

    static failsAddpatients () {
        console.log('tidak memiliki akses untuk add pasien')
    }

    static logoutE () {
        console.log('anda berhasil log out')
    }
}

module.exports = Todoview