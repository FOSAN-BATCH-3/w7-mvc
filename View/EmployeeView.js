

class EmployeeView {

    static lihatEmployee(data){
        console.log(data)
    }

    static lihatPesan(pesan){
        console.log(pesan)
    }

    static pesanLogin1(data){
        console.log(`user ${data.nama} logged in successfully`)
    }

    static pesanLogin2(){
        console.log('username / password wrong')
    }

    static pesanLogin3(){
        console.log(`Silahkan login sebagai dokter untuk menamabahkan pasien`)
    }

    static pesanLogout(){
        console.log (`Berhasil Logout`)
    }

    static lihatHelp(){
        console.log(`$ node todo.js help # menampilkan command apa saja yang tersedia
        $ node todo.js findallemployee # Melihat daftar list employee yang ada 
        $ node todo.js register <username> <password> <pekerjaan> # Menambahkan Akun Employees
        $ node todo.js login <username> <password> # Masuk ke dalam Program Hospital
        $ node todo.js addpasien <nama_pasient> <jenis_penyakit> #Menambah pasien kedalam Hospital
        $ node todo.js logout # Keluar dari Program Hospital`)
    }
}

module.exports = EmployeeView;