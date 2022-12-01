const mysql = require('mysql2/promise');
const {logger} = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
    host: 'database-1.cj65iposkrib.ap-northeast-2.rds.amazonaws.com',
  // host:'localhost',
   //user: 'root',
    user: 'admin',
    port: '3306',
   // password:'nrb123',
    password: 'nrb12345',
    database: 'nrb'
});

module.exports = {
    pool: pool
};
