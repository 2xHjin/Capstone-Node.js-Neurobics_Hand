module.exports = function(app){
    const record = require('./recordController');

   // 1. 운동 기록 날짜별 조회 API
    app.get('/records', record.getRecordDay);

    // 2. 운동 기록 생성 API
    app.post('/records', record.postRecord);

    // 3. 운동 기록 단계별 수정 API
    app.patch('/records',record.patchPost);

    //patch들 추가
};