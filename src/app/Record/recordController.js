const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const recordService = require("./recordService");
const recordProvider = require("./recordProvider");

/*
    API Name: 운동 기록 날짜별 조회 api
    [GET] /record/
*/
exports.getRecordDay = async function(req, res) {
 
    const {dayIdx,userIdx} = req.body;

    // validation
    if(!dayIdx) {
        return res.send(errResponse(baseResponse.USER_DAYIDX_EMPTY));
    }

    const RecordDayResult = await recordProvider.retrieveRecordDay(dayIdx,userIdx);

    return res.send(response(baseResponse.SUCCESS, RecordDayResult));
}

/*
    API Name: 운동 기록 생성 api
    [POST]                 /posts
    /posts?userIdx=
    누가 작성했는지 알아야함 내용 필요
*/
exports.postRecord = async function(req, res) {
    /*
        Body: userIdx, content, postImgUrls
    */
    const { userIdx,dayIdx,level1NumE,level1A,level2NumE,level2A,level3NumE,level3A } = req.body;

    //기록을 저장한 유저테이블에 정확하게 기록하기위해 로그인 정보와 비교

    if (!userIdx) {
        return res.send(errResponse(baseResponse.USER_USERIDX_EMPTY));
    } 

    if (userIdx <= 0) {
        return res.send(errResponse(baseResponse.USER_USERIDX_LENGTH));
    } 

    const createRecordResponse = await recordService.createRecord(
        userIdx,
        dayIdx,
        level1NumE,level1A,level2NumE,level2A,level3NumE,level3A
    );

    return res.send(createRecordResponse);
}

/*
    API No. 3.3
    API Name: 게시물 수정 API
    [PATCH] /records
*/

exports.patchPost = async function(req, res) {
    /*
        Body: content
        Path Variable: postIdx
    */

    const {dayIdx,userIdx,level,NumE,A} = req.body;

    // validation
    if(!dayIdx) {
        return res.send(errResponse(baseResponse.USER_DAYIDX_EMPTY));
    }
   
    const editPostResponse = 
    await recordService.editPost(dayIdx,userIdx,level,NumE,A);

    return res.send(editPostResponse);
}

