const fs = require('fs');
const EmployeeModel = require('../Model/EmployeeModel');
const PasienModel = require('../Model/PasienModel');
const EmployeeView = require('../View/EmployeeView');
const PasienView = require ('../View/PasienView.js')


class PasienController{

    static addPasien(nama, sakit){
        EmployeeModel.readData(function(data1){
            let counts = 0
            for (let i = 0; i <data1.length; i++ ){
            counts+= 1
                // console.log(data1[i])
            
            if (data1[i].statusLogin == 'in'){
                if (data1[i].pekerjaan == 'dokter'){
                    PasienModel.readData(function(data2){
                        let x = new PasienModel(nama,sakit)
                        data2.push(x)
                        PasienModel.saveData(data2, function(){
                            PasienView.addPesan(data2)
                        })
                    })
                    break;
                }else {
                    PasienView.addPesan1()
                }
            }
            else if (counts == data1.length){
                EmployeeView.pesanLogin3()
            }
            }
        })

        
    }
} 
module.exports = PasienController;