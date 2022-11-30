const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: '192.128.219.103',
    user: 'root',
    port: '3306',
    password: 'nrb123',
    database: 'nrb'
});

module.exports = {
    pool: pool
};