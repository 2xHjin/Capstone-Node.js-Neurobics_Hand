module.exports = function(app){
    const test1 = require('./testController');

    // 0. 테스트 API
     app.get('/app/tests', test1.getTest);

    // 1. 검진 문항 조회 api
    app.get('/tests/:qIdx', test1.getQ);
    //app.get('/users/:userIdx',user.getUsers);
};