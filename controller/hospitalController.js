const EmployeeModel = require('../model/employeeModel')
const PatientsModel = require('../model/patientsModel');
const HospitalView = require('../view/hospitalView');

class HospitalController{
    static help(){
        console.log('node todo.js findallemployee # Melihat daftar list employee yang ada ');
        console.log('node todo.js register <username> <password> <pekerjaan> # Menambahkan Akun Employees');
        console.log('node todo.js login <username> <password> # Masuk ke dalam Program Hospital');
        console.log('node todo.js addpasien <nama_pasient> <jenis_penyakit> #Menambah pasien kedalam Hospital');
        console.log('node todo.js logout # Keluar dari Program Hospital');
    }
    static register(name, password, role){
        EmployeeModel.register(name, password, role, (data) =>{
            HospitalView.register(data)
        })
    }
}

module.exports = HospitalController