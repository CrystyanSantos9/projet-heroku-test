const mysql = require('mysql')
const config = require('../../config')

const connection = mysql.createConnection(config.db)

const query =  ()=>{
    return new Promise((resolve, reject)=>{
        connection.connect((err)=>{
            if(err) throw err 
            connection.query('SELECT * FROM usuarios', (error, result, fields)=>{
                if(error) reject (error) 
                console.log(result)
                return resolve(result)
                
                connection.end()
            })
        })
    })
}

module.exports = {
    query
}