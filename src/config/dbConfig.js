require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV,
    DB_CHOICE: process.env.DB_CHOICE,
    SQL_CONFIG:{
        username: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DB,
        host: process.env.SQL_HOST,
        port: process.env.SQL_PORT,
        dialect: process.env.SQL_DIALECT,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
};