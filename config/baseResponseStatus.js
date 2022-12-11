module.exports = {

    // Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },


    //Request error
    SIGNUP_NAME_EMPTY : { "isSuccess": false, "code": 2001, "message":"이름을 입력해주세요" },
    SIGNUP_NAME_LENGTH : { "isSuccess": false, "code": 2002, "message":"이름은 30자리 미만으로 입력해주세요." },
    
    //User
    USER_DAYID_EMPTY : { "isSuccess": false, "code": 2012, "message": "day를 입력해주세요." },
    USER_DAYID_NOT_EXIST : { "isSuccess": false, "code": 2013, "message": "해당 날짜의 운동기록이 존재하지 않습니다." },
    USER_USERIDX_EMPTY : { "isSuccess": false, "code": 2019, "message": "userIdx를 입력해주세요." },
    USER_USERIDX_LENGTH : { "isSuccess": false, "code": 2020, "message": "userIdx는 0보다 큰 값으로 입력해주세요." },
    
    //Test
    TEST_QIDX_EMPTY : { "isSuccess": false, "code": 2021, "message": "qIdx를 입력해주세요." },
    TEST_QIDX_LENGTH : { "isSuccess": false, "code": 2022, "message": "qIdx는 0보다 큰 값으로 입력해주세요." },
    
    
    //SIGNIN_NAME_WRONG : { "isSuccess": false, "code": 3003, "message": "이름이 잘못 되었습니다." },

    
    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "isSuccess": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "isSuccess": false, "code": 4001, "message": "서버 에러"},
 
 
}
