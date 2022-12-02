const testProvider = require("./testProvider");
const testService = require("./testService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

//테스트 api
exports.getTest = async function (req,res) {
    return res.send(response(baseResponse.SUCCESS));
}


/*
 * API No. 3
테스트 상세 조회 api
[get]/test/:qIdx
*/
exports.getQ = async function(req,res){
    /*
    Path Variable: qIdx
    */
   const qIdx=req.params.qIdx;

   //validation
   if(!qIdx){
    return res.send(errResponse(baseResponse.TEST_QIDX_EMPTY));
   }
   if(qIdx<=0){
    return res.send(errResponse(baseResponse.TEST_QIDX_LENGTH));
   }

   const qIdxResult=await testProvider.retrieveTest1(qIdx);

   return res.send(response(baseResponse.SUCCESS,qIdxResult));

}