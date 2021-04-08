const mysql = require('mysql')
const config = require('../../config')

const connection = mysql.createConnection(config.db)
// connection.connect()

connection.connect()

const execute =  ()=>{
    return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM usuarios', (err, result, fields)=>{
               if(err) return reject(err)
                    resolve(result)
                    // connection.end() 
                    console.log(result)
            })    
        })        
}

module.exports = {
    execute
}