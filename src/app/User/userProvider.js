const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const userDao = require("./userDao");

// Provider: Read 비즈니스 로직 처리

exports.uIdxCheck = async function (uIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const emailCheckResult = await userDao.selectUserIdx(connection, uIdx);

    connection.release();
  
    return emailCheckResult[0];
  };