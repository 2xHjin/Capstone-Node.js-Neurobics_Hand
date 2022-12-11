const userService = require("./userService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No. 1
 * API Name : 유저 생성 (회원가입) API
 * [POST] /users
 */
 exports.postUsers = async function (req, res) {

    const {uName} = req.body;

    // 빈 값 체크
    if (!uName)
        return res.send(response(baseResponse.SIGNUP_NAME_EMPTY));

    // 길이 체크
    if (uName.length > 30)
        return res.send(response(baseResponse.SIGNUP_NAME_LENGTH));

    const signUpResponse = await userService.createUser(
        uName
    );
    
    return res.send(signUpResponse);
};

