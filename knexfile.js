require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST_DEV || '127.0.0.1',
      user: process.env.DATABASE_USER_DEV,
      password: process.env.DATABASE_PASSWORD_DEV,
      database: process.env.DATABASE_NAME_DEV
    },
    migrations: {
      directory: __dirname+'/database/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'recipes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname+'/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname+'/database/migrations'
    }
  }

};
