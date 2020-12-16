let request = process.argv[2]
let parameter = process.argv.slice(3)
let todoController = require('./controller/todoController')

switch(request) {
    case 'register':
        todoController.registerE(parameter[0], parameter[1], parameter[2])
    break;
    case 'login':
        todoController.loginE(parameter[0], parameter[1])
    break;
    case 'addPatient':
        todoController.registerP(parameter[0], parameter.slice(1))
    break;
    case 'logout':
        todoController.logoutE()
    break;
    default:
        console.log('ga ada command itu goblok')
}