const request = process.argv[2]
const parameter = process.argv.slice(3)

const EmployeeController = require (`./Controller/EmployeeController.js`)
const PasienController = require(`./Controller/PasienController.js`)

switch (request){
    case 'help':
        EmployeeController.help()
    break;
    case 'register':
        EmployeeController.register(parameter[0],parameter[1],parameter[2])
    break;
    case 'findAllEmployee':
        EmployeeController.findAllEmployee()
    break;
    case 'login':
        EmployeeController.login(parameter[0],parameter[1])
        break;
    case 'addPasien':
        PasienController.addPasien(parameter[0],parameter[1])
    break;
    case 'logout':
        EmployeeController.Logout()
    break;
    default :
    console.log ('Error Bosq')
}
