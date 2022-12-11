const mysql = require('mysql2/promise');
const {logger} = require('./winston');

const pool = mysql.createPool({
    host: 'database-1.cj65iposkrib.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    port: '3306',
    password: 'nrb12345',
    database: 'nrb'
});

module.exports = {
    pool: pool
};
