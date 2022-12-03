const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const recordService = require("./recordService");
const recordProvider = require("./postProvider");

/*
    API No. 3.1
    API Name: 게시물 조회 API
    [GET] /posts?userIdx=
*/
exports.getRecordDay = async function(req, res) {
    /*
        Query String: dayIdx
    */
    const dayIdx = req.query.dayIdx;

    // validation
    if(!dayIdx) {
        return res.send(errResponse(baseResponse.USER_DAYIDX_EMPTY));
    }
   // if (dayIdx <= 0) {
   //     return res.send(errResponse(baseResponse.USER_DAYIDX_LENGTH));
   // }

    const RecordDayResult = await recordProvider.retrieveRecordDay(dayIdx);

    return res.send(response(baseResponse.SUCCESS, RecordDayResult));
}

/*
    API No. 3.2
    API Name: 게시물 생성 API
    [POST] /posts
    /posts?userIdx=
    누가 작성했는지 알아야함 내용 필요
*/
exports.postRecord = async function(req, res) {
    /*
        Body: userIdx, content, postImgUrls
    */
    const { uIdx,dayIdx,level1NumE,level1A,level2NumE,level2A,level3NumE,level3A } = req.body;

    //기록을 저장한 유저테이블에 정확하게 기록하기위해 로그인 정보와 비교
    const userIdxFromJWT = req.verifiedToken.userIdx;

    if (userIdxFromJWT != uIdx) {
        return res.send(errResponse(baseResponse.USER_ID_NOT_MATCH));
    }

    if (!uIdx) {
        return res.send(errResponse(baseResponse.USER_USERIDX_EMPTY));
    } else if (postImgUrls.length <= 0) {
        return res.send(errResponse(baseResponse.POST_POSTIMGURLS_EMPTY));
    }

    if (uIdx <= 0) {
        return res.send(errResponse(baseResponse.USER_USERIDX_LENGTH));
    } else if (content.length > 450) {
        return res.send(errResponse(baseResponse.POST_CONTENT_LENGTH));
    }

    const createRecordResponse = await recordService.createRecord(
        uIdx,
        dayIdx,
        level1NumE,
        level1A,
        level2NumE,
        level2A,
        level3NumE,
        level3A 
    );

    return res.send(createRecordResponse);
}