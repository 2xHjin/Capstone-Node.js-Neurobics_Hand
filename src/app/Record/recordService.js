const {pool} = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const recordDao = require("./recordDao");
//const recordProvider = require("./recordProvider");

exports.createRecord = async function( userIdx,dayIdx,level1NumE,level1A,level2NumE,level2A,level3NumE,level3A) {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        await connection.beginTransaction();

        const insertRecordParams = [userIdx, dayIdx,level1NumE,level1A,level2NumE,level2A,level3NumE,level3A];
        const recordResult = await recordDao.insertRecord(connection, insertRecordParams);

        // 생성된 post의 dayIdx
        const recordIdx = recordResult[0].insertId;

        await connection.commit();

        return response(baseResponse.SUCCESS, { addedPost: recordIdx });
    } catch (err) {
        console.log(`App - createRecord Service Error\n: ${err.message}`);

        await connection.rollback();

        return errResponse(baseResponse.DB_ERROR);
    } finally {
        connection.release();
    }
}


exports.editPost = async function (dayIdx,userIdx,level,NumE,A) {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
        const editPostResult = await recordDao.updatePost(connection,dayIdx,userIdx,level,NumE,A);

        return response(baseResponse.SUCCESS);
    } catch (err) {
        console.log(`App - editPost Service error\n: ${err.message}`);

        return errResponse(baseResponse.DB_ERROR);
    } finally {
        connection.release();
    }
}
