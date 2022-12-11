const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const testDao = require("./testDao");

exports.retrieveTest1 = async function (qIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const testResult = await testDao.SelectTestId(connection, qIdx);
  
    connection.release();
  
    return testResult[0];
  };
  