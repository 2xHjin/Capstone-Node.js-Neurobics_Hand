const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const userDao = require("./userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

// Service: Create 비즈니스 로직 처리

exports.createUser = async function(uName){
    try {
        const insertUserInfoParams = [uName];

        const connection = await pool.getConnection(async (conn) => conn);

        const userIdxResult = await userDao.insertUserInfo(connection, insertUserInfoParams);
        console.log(`추가된 회원 : ${userIdxResult[0].insertId}`)
        connection.release();
        return response(baseResponse.SUCCESS,{'userIdx': userIdxResult[0].insertId});


    } catch (err) {
        logger.error(`App - createUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};

