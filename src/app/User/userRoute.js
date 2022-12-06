module.exports = function(app){
    const user = require('./userController');

    // 1. 회원가입-이름등록 API
    app.post('/users', user.postUsers);

    // 2. uIdx->uName API
    app.get('/users', user.getUserPost);
};