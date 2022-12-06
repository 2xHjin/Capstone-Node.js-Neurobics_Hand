const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
//const secret_config = require("../../../config/secret");
const userDao = require("./userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

/*const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");
*/

// Service: Create 비즈니스 로직 처리

exports.createUser = async function(uName){
    try {
        //이름중복확인 없음
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




// TODO: After 로그인 인증 방법 (JWT)
/*
exports.postSignIn = async function (uName) {
    try {
        // 이메일 여부 확인
        const uNameRows = await userProvider.uNameCheck(uName);
        if (uNameRows.length < 1) return errResponse(baseResponse.SIGNIN_NAME_WRONG);

     

        // 계정 상태 확인
        const userInfoRows = await userProvider.accountCheck(email);

        if (userInfoRows[0].status === "INACTIVE") {
            return errResponse(baseResponse.SIGNIN_INACTIVE_ACCOUNT);
        } else if (userInfoRows[0].status === "DELETED") {
            return errResponse(baseResponse.SIGNIN_WITHDRAWAL_ACCOUNT);
        }

        console.log(userInfoRows[0].id) // DB의 userId

        //토큰 생성 Service
        let token = await jwt.sign(
            {
                userId: userInfoRows[0].id,
            }, // 토큰의 내용(payload)
            secret_config.jwtsecret, // 비밀키
            {
                expiresIn: "365d",
                subject: "userInfo",
            } // 유효 기간 365일
        );

        return response(baseResponse.SUCCESS, {'userId': userInfoRows[0].id, 'jwt': token});

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};
*/