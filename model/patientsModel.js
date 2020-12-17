const fs = require('fs')

class PatientsModel{
    constructor(urut, pasien, diagnose){
    this.urut = urut;
    this. pasien = pasien;
    this.diagnose = diagnose;
    }
}

module.exports = PatientsModel