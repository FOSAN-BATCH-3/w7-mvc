const fs = require('fs')

class EmployeeModel{
    constructor(id, name, password, role){
        this.id = id;
        this.name = name;
        this.password = password;
        this.role = role;
    }
    static list(cb){
        fs.readFile('./employees.json', 'utf8', (err,data) =>{
            if(err){
                console.log(err);
            }else{
                cb(JSON.parse(data))
            }
        })
    }
    static saveEmployee(data){
        let save = JSON.stringify(data, null, 2)
        fs.writeFileSync('./employees.json', save)
    }
    static register(name, password, role, cb){
        EmployeeModel.list(data =>{
            console.log(data);
            data.push(new EmployeeModel(data[data.length-1].id+1, name, password, role))
            EmployeeModel.saveEmployee(data)
            cb({name, role, data})
        })
    }
}

module.exports = EmployeeModel