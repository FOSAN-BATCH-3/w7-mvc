const request = process.argv[2];
const parameter = process.argv.slice(3);
const hospitalController = require('./controller/hospitalController')

switch(request){
    case 'help':
        hospitalController.help()
        break;
    case 'findallemployee':
        break;
    case 'register':
        hospitalController.register(parameter[0], parameter[1], parameter[2])
        break;
    case 'login':
        break;
    case 'addpasien':
        break;
    case 'logout':
        break;
    default:
        break;
}