const repositories = require('../repositories/index')

const status =  async (request, h)=>{
    return await repositories.getAll()
}

module.exports =  {
    status
}