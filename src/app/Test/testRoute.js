module.exports = function(app){
    const test1 = require('./testController');

    // 0. 테스트 API
     app.get('/app/tests', test1.getTest);

    // 1.3 문항 상세 조회 api
    app.get('/test/:qIdx', test1.getQ);
    //app.get('/users/:userIdx',user.getUsers);
};