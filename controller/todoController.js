let todoView = require('../view/todoView')
let todoModel = require('../model/todoModel')


class Todocontroller {
    static registerE(name, pass, job) {
        todoModel.listTodoE((data)=> {
            let penampung = 0
            let flag = false
            for (let i=0; i<data.length; i++) {
                if (data[i].username==name && data[i].job==job) {
                    flag = true
                }
                penampung = Math.max(data[i].id)
            }
            if (flag==false && pass!==undefined) {
                data.push({id: penampung+1, username: name, password: pass, job: job, Login: 'x'})
                todoModel.saveDataE(data)
                todoView.registerE()
            } else if (flag===true) {
                todoView.registerFails()
            } else if (pass==undefined && job==undefined) {
                todoView.noPassword()
            }
        })
    }

    static loginE(name, pass) {
        todoModel.listTodoE((data)=> {
            let flag = false
            for (let i=0; i<data.length; i++) {
                if (data[i].Login=='v') {
                    flag = true
                }
            }
            if (flag===false) {
               for (let j=0; j<data.length; j++) {
                    if (data[j].username==name && data[j].password==pass) {
                    data[j].Login = 'v'
                    }
               }
                todoModel.saveDataE(data)
                todoView.loginE(name, pass)
            } else {
                todoView.doubleLogin ()
            } 
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
                    let tanda = 0
                    for (let i=0; i<data.length; i++) {
                        penampung = Math.max(data[i].id)
                        if (data[i].username==name) {
                            tanda = 1
                            if (sakit.length>1) {
                                let penampung2 = sakit.toString()
                                let penampung3 = penampung2.replace(/,/g, ' ')
                                data[i].diagnose.push(penampung3)
                                todoModel.saveDataP(data)
                                todoView.updatePasien(name)
                            } else {
                                let penampung2 = sakit.toString()
                                data[i].diagnose.push(penampung2)
                                todoModel.saveDataP(data)
                                todoView.updatePasien(name)
                            }
                        }
                    }
                    if (tanda==0) {
                        if (sakit.length>1) {
                            let penampung2 = sakit.toString()
                            let penampung3 = penampung2.replace(/,/g, ' ')
                            data.push({id: penampung+1, username: name, diagnose: [penampung3]})
                            todoModel.saveDataP(data)
                            todoView.successAddpatients()
                        } else {
                            data.push({id: penampung+1, username: name, diagnose: sakit})
                            todoModel.saveDataP(data)
                            todoView.successAddpatients()
                        } 
                    } 
                })
            } else {
                todoView.failsAddpatients()
            }
        })
    }

    static logoutE() {
        todoModel.listTodoE((data)=> {
            let flag = false
            for (let i=0; i<data.length; i++) {
                if (data[i].Login=='v') {
                    data[i].Login = 'x'
                    flag = true
                }
            }
            if (flag===true) {
                todoModel.saveDataE(data)
                todoView.logoutE()
            } else {
                todoView.doubleLogout()
            }
            
        })
    }
}

module.exports = Todocontroller