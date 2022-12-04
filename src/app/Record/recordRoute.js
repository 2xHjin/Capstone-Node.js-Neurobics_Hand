module.exports = function(app){
    const record = require('./recordController');

   // 1. 운동 기록 날짜별 조회 api
    app.get('/records/', record.getRecordDay);

    // 2. 운동 기록 생성 api
    app.post('/records/', record.postRecord);

    // 3. 운동 기록 수정
    app.patch('/records/',record.patchPost);

    //patch들 추가
};