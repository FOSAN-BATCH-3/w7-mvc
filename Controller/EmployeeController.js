const todoController = require('../../w6-mvc/Controller/todoController.js');
const EmployeeModel = require ('../Model/EmployeeModel.js');
const EmployeeView = require ('../View/EmployeeView.js');


class EmployeeController{


    static help(){
        EmployeeView.lihatHelp()
    }

    static findAllEmployee(){
        EmployeeModel.readData(function(data){
            EmployeeView.lihatEmployee(data)
        })
    }
    static register(name,pass,job){
        EmployeeModel.readData(function(data){
            let x = new EmployeeModel (name,pass,job)
            data.push(x)
            EmployeeModel.saveData(data, function(pesan){
                EmployeeView.lihatPesan(pesan)
            })
        })
        
    }
    static login (id,pass){
        EmployeeModel.readData(function(data){
         for(let i = 0 ; i < data.length;i++){
            if (data[i].nama == id && data[i].password == pass){
                data[i].statusLogin = 'in'
                EmployeeModel.saveData(data,function(){
                    EmployeeView.pesanLogin1(data[i])
                })
                break;
            }
            else{
                EmployeeView.pesanLogin2()
            }
         }
        })

    }

    static Logout(){
        EmployeeModel.readData(function(data){
            for (let i =0; i <data.length; i++ ){
                if (data[i].statusLogin == "in"){
                    data[i].statusLogin = 'out'
                    EmployeeModel.saveData(data,function(){
                        EmployeeView.pesanLogout()
                    })
                    break;
                }
            }
        })
    }
}

module.exports = EmployeeController;