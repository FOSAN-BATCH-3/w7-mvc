class HospitalView{
    static register(data){
        // console.log(data);
        console.log(`save data success [username: ${data.name} role: ${data.role}]. Total employee ${data.data.length}`);
    }
}

module.exports = HospitalView