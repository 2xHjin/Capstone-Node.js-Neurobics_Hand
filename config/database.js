const mysql = require('mysql');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
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