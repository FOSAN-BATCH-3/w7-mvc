# Hospital Interface

## Learning Competencies

- OOP
- MVC
- Callback

## Summary

Challenge kali ini akan membuat sebuah interface untuk manage data doctor dan patient. Komponen utamanya di sini adalah :  dokter dan patient.

Tujuan utama dari tantangan ini adalah untuk eksplorasi desain berorientasi objek. Kita akan membuat beberapa class dan memiliki method masing-masing.

## 

### Level 0 : Create Your Input 

buatlah sebuah file yang bernama todo.js yang berfungsi sebagai input untuk menjalankan program hospital anda. pada file tersebut gunakan method **process argv** untuk mengakses sebuah method yang anda buat / gunakan 

```javascript
$ node todo.js help # menampilkan command apa saja yang tersedia
$ node todo.js findallemployee # Melihat daftar list employee yang ada 
$ node todo.js register <username> <password> <pekerjaan> # Menambahkan Akun Employees
$ node todo.js login <username> <password> # Masuk ke dalam Program Hospital
$ node todo.js addpasien <nama_pasient> <jenis_penyakit> #Menambah pasien kedalam Hospital
$ node todo.js logout # Keluar dari Program Hospital
```



### Level 1 : Creating the model

#### Employee

Tulis code yang dapat digunakan untuk membuat object employee, dimana nantinya setiap employee ini harus login untuk dapat mengakses suatu data.

Pikirkanlah `property` apa saja yang perlu disimpan dari sebuah object employee ! tambahkan juga property jabatan untuk employee. Contoh jabatan employee : admin, dokter, receptionist, office boy atau kamu bisa tambahkan role lain nya.

#### Patients

Tulis code yang dapat digunakan untuk membuat object patient. Pikirkanlah data apa saja yang perlu disimpan dari seorang patient, misalnya id patient, nama, diagnosa, dll.

#### `Check your code !`

- Apakah code kamu di atas sudah sesuai dengan  MVC dan CallBack ?
- Apakah code untuk membuat kedua object di atas masih berada dalam 1 file ? apabila ya, pisahkan dalam file yang berbeda dengan mengikuti aturan MVC
- Pastikan struktur code kamu sudah  MVC dan ada CallBack sebelum lanjut ke level 2



### Level 2 : Registration Employee Feature

`Ingat!` tulislah code kamu dengan struktur MVC dan CallBack.

1. Buat sebuah file baru bernama `employees.json` berfungsi sebagai database
2. Tambahkan file `index.js` dan tulis code agar ketika menjalankan command `node index.js register   `akan membuat employee baru yang disimpan di tabel `employees`

Contoh interface-nya seperti di bawah ini. Interface ini yang wajib harus ada, selebihnya kalian bebas menambahkan interface / fitur lain yang menurut kalian terbaik:

```bash
$ node index.js register budi 123456 dokter
> save data success [username: budi role: dokter]. Total employee : 1

$ node index.js register angga 54321 admin
> save data success [username: angga role: admin]. Total employee : 2
```



### Level 3 : Login Employee Feature

Ingat! tulislah code kamu dengan struktur  MVC dan CallBack.

Tulis code agar ketika menjalankan command ini di terminal : `node index.js login  `, akan menampilkan keterangan apakah berhasil login atau tidak SESUAI data employee yang sebelumnya di register

Contoh interface-nya seperti di bawah ini :

```bash
contoh password Benar :

$ node index.js login budi BudiGanteng123
> user budi logged in successfully

contoh username / password Salah :

$ node index.js login budi y1381hdsh
> username / password wrong
```



### Level 4 : `Add Patient` Feature for Employee with role `dokter`only

Ingat! tulislah code kamu dengan struktur MVC.

1. Buat sebuah file di `patients.json` yang berfungsi sebagai database pasien

2. Setelah menjalankan command untuk login DAN role user tsb adalah DOKTER. ketika menjalankan command ini di terminal :

   ```bash
   node index.js addPatient Daniel batuk 
   ```

   command diatas akan menambahkan data patient tsb ke dalam table patient. Apabila user yang login `BUKAN DOKTER`, maka akan menampilkan keterangan : `tidak memiliki akses untuk add patient`

Contoh interface-nya seperti di bawah ini :

```bash
----------------------------
contoh login sebagai dokter :
----------------------------
node index.js login budi 123456

> user budi logged in successfully

$ node index.js addPatient Daniel batuk
> data pasien berhasil ditambahkan. Total data pasien : 1

$ node index.js addPatient Agung 'luka dalam'
> data pasien berhasil ditambahkan. Total data pasien : 2

----------------------------
contoh login bukan dokter :
----------------------------

$ node index.js login Angga 54321
> user Angga logged in successfully!

$ node index.js addPatient Daniel batuk
> tidak memiliki akses untuk add patient
```



### Level 5 : Buatlah Fitur Logout

Buatlah Fitur Logout

