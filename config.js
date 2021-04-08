require('dotenv/config')

const config = {
    db: { /* don't expose password or any sensitive info, done only for demo */
      host: process.env.DB_HOST || 'freedb.tech',
      user: process.env.DB_USER || 'freedbtech_geshan-lr',
      password: process.env.DB_PASSWORD || 'G2VjjQ5d47zyjqX',
      database: process.env.DB_NAME || 'freedbtech_language',
    },
    listPerPage: process.env.LIST_PER_PAGE || 10,
  };
  
  
  module.exports = config;