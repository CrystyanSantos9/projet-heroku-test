// const repositories = require('../repositories/index')
const repositories = require('../services/db')

const status =  async (request, h)=>{
   const result = await repositories.execute().then(result=>result )
   return result
}

module.exports =  {
    status
}