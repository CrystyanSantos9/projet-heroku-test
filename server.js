const Hapi = require('@hapi/hapi');
const swagger =require('./src/configs/swagger')
require('dotenv/config');
const routes = require('./src/routes/index')


const server = async () => {

    const hapiServer = Hapi.server({
        port: process.env.PORT || "3000",
        host: process.env.HOST || 'localhost'
    });
    
    await hapiServer.register(swagger)
    hapiServer.route(routes)

    return hapiServer
};

module.exports = server()