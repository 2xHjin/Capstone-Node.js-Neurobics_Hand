module.exports = function(app){
    const record = require('./recordController');

   // 1. 운동 기록 날짜별 조회 api
    app.get('/record/:dayIdx', record.getRecordDay);

    // 2. 운동 기록 생성 api
    app.post('/record/:uIdx', record.postRecord);
};