const server = require('./server');

server.then(hapi=>{
    // console.log(`Server up on http://${process.env.HOST}:${process.env.PORT}`)
    
    hapi.start();
    console.log('Server running on %s',  hapi.info.uri);
})