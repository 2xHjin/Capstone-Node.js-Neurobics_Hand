const { pool } = require("../../../config/database");
const recordDao = require("./recordDao");

exports.retrieveRecordDay = async function(dayIdx) {
    const connection = await pool.getConnection(async (conn) => conn);
    const recordListResult = await recordDao.selectRecord(connection, dayIdx);

    connection.release();
    return recordListResult;
}

