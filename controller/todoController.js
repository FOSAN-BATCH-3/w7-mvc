let todoView = require('../view/todoView')
let todoModel = require('../model/todoModel')

class Todocontroller {
    static registerE(name, pass, job) {
        todoModel.listTodoE((data)=> {
            let penampung = 0
            for (let i=0; i<data.length; i++) {
                penampung = Math.max(data[i].id)
            }
            data.push({id: penampung+1, username: name, password: pass, job: job, Login: 'x'})
            todoModel.saveDataE(data)
            todoView.registerE()
        })
    }

    static loginE(name, pass) {
        todoModel.listTodoE((data)=> {
            for (let i=0; i<data.length; i++) {
                if (data[i].username==name && data[i].password==pass) {
                    data[i].Login = 'v'
                }
            }
            todoModel.saveDataE(data)
            todoView.loginE(name, pass)
        })
    }

    static registerP(name, sakit) {
        todoModel.listTodoE((data)=> {
            let flag = false
            for (let j=0; j<data.length; j++) {
                if (data[j].job=='Doctor' && data[j].Login=='v') {
                    flag = true
                }
            }
            if (flag===true) {
                todoModel.listTodoP((data)=> {
                let penampung = 0
                for (let i=0; i<data.length; i++) {
                penampung = Math.max(data[i].id)
                }
                let penampung2 = sakit.toString()
                let penampung3 = penampung2.replace(/,/g, ' ')
                data.push({id: penampung+1, username: name, diagnose: penampung3})
                todoModel.saveDataP(data)
                todoView.successAddpatients()
                })
            } else {
                todoView.failsAddpatients()
            }
        })
    }

    static logoutE(name) {
        todoModel.listTodoE((data)=> {
            for (let i=0; i<data.length; i++) {
                if (data[i].username==name) {
                    data[i].Login = 'x'
                }
            }
            todoModel.saveDataE(data)
            todoView.logoutE()
        })
    }
}

module.exports = Todocontroller