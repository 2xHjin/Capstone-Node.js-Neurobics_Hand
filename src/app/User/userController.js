const userService = require("./userService");
const userProvider = require("./userProvider");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");


/**
 * API No. 1
 * API Name : 유저 생성 (회원가입) API
 * [POST] /app/users
 */
 exports.postUsers = async function (req, res) {

    /**
     * Body: email, password, nickname
     */
    const {uName} = req.body;

    // 빈 값 체크
    if (!uName)
        return res.send(response(baseResponse.SIGNUP_NAME_EMPTY));

    // 길이 체크
    if (uName.length > 30)
        return res.send(response(baseResponse.SIGNUP_NAME_LENGTH));


    // 기타 등등 - 추가하기


    const signUpResponse = await userService.createUser(
        uName
    );
    
//수정하기!!!!!
    return res.send(signUpResponse);
};

/*
    API No. 1.3
    API Name: 유저 상세 조회 API
    [GET] /users/:userIdx

*/
/*
        Path Variable: userIdx
    */

exports.getUserPost = async function (req, res) {
    
    const {uName} = req.body;

    // validation
    if (!uName)
    return res.send(response(baseResponse.SIGNUP_NAME_EMPTY));

// 길이 체크
    if (uName.length > 30)
    return res.send(response(baseResponse.SIGNUP_NAME_LENGTH));
  

    const uIdxResult = await userProvider.uIdxCheck(uName);
    return res.send(response(baseResponse.SUCCESS, uIdxResult))
}
/*

exports.login = async function (req, res) {

    const {uName} = req.body;

    // TODO: email, password 형식적 Validation

    const signInResponse = await userService.postSignIn(uName);

    return res.send(signInResponse);
};
*/