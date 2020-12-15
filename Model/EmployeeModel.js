const fs = require('fs')


class EmployeeModel{

    constructor(name,pass,job){
        this.nama = name
        this.password = pass
        this.pekerjaan = job
        this.statusLogin = 'out'
    }

    static readData(cb){
        fs.readFile('./Employee.json','utf8',function(err,data){
            if (err){
                console.log(err)
            }else{
               cb( JSON.parse(data))
            }
        })
    }
    static saveData(data,cb){
        fs.writeFile('./Employee.json', JSON.stringify(data,null,2),function(){
            cb('berhasil')
        })
    }
} 
module.exports = EmployeeModel;