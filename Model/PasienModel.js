const fs = require('fs')


class PasienModel{

    constructor(name,sakit){
        this.nama = name
        this.penyakit = sakit
    }

    static readData(cb){
        fs.readFile('./Pasien.json','utf8',function(err,data){
            if (err){
                console.log(err)
            }else{
               cb( JSON.parse(data))
            }
        })
    }
    static saveData(data,cb){
        fs.writeFile('./Pasien.json', JSON.stringify(data,null,2),function(){
            cb('berhasil')
        })
    }
} 
module.exports = PasienModel;