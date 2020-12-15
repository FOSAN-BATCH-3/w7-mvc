class PasienView {

    static lihatPasien(data){
        console.log(data)
    }

    static addPesan(data2){
        console.log(`data pasien berhasil ditambahkan. Total data pasien : ${data2.length}`)
    }
    static addPesan1(){
        console.log(`tidak memiliki akses untuk add patient`)
    }
}

module.exports = PasienView;