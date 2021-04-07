const service = require('../services/auth.service');

const getAll = ()=>{
    const users = service.getAll()
    return users 
}

module.exports = {
    getAll
}