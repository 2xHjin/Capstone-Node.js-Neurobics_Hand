const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const recordService = require("./recordService");
const recordProvider = require("./recordProvider");

/*
    API Name: 운동 기록 날짜별 조회 API
    [GET] /records/:dayIdx/:userIdx
*/
exports.getRecordDay = async function(req, res) {
 
    const dayIdx = req.params.dayIdx;
    const userIdx= req.params.userIdx;
    // validation
    if(!dayIdx) {
        return res.send(errResponse(baseResponse.USER_DAYIDX_EMPTY));
    }

    const RecordDayResult = await recordProvider.retrieveRecordDay(dayIdx,userIdx);

    return res.send(response(baseResponse.SUCCESS, RecordDayResult));
}

/*
    API Name: 운동 기록 생성 API
    [POST]/records
    누가 작성했는지 알아야함 내용 필요
*/
exports.postRecord = async function(req, res) {

    const { userIdx,dayIdx,level1NumE,level1A,level2NumE,level2A,level3NumE,level3A } = req.body;

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
    API Name: 게시물 수정 API
    [PATCH] /records
*/

exports.patchRecord = async function(req, res) {

    const {dayIdx,userIdx,level,NumE,A} = req.body;

    // validation
    if(!dayIdx) {
        return res.send(errResponse(baseResponse.USER_DAYIDX_EMPTY));
    }
   
    const editRecordResponse = 
    await recordService.editPost(dayIdx,userIdx,level,NumE,A);

    return res.send(editRecordResponse);
}

