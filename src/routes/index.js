const { status } =require('../controllers/app.controllers')
const { LoginResponseDTO } = require('../models/dto/auth.dto')


const root = ({
    method: 'GET', 
    path: "/", 
    handler: status,
    options: {
        tags: ['api'], //tenho que ter pelo menos essa tag
        description: 'Listar usuários', 
        notes: 'Pode ser utilizado para ver o status da aplicação'
    }
})
 
module.exports = [ root ]