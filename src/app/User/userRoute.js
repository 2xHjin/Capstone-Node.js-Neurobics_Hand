module.exports = function(app){
    const user = require('./userController');

    // 1. 유저 생성 (회원가입) API
    app.post('/app/users', user.postUsers);



    // 1.3 유저 상세 조회 api
    app.get('/app/uNames', user.getUserPost);
};