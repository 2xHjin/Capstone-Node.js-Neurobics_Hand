async function insertRecord(connection, insertPostParams) {
    const insertPostQuery = `
        INSERT INTO Record(userIdx, dayIdx,
            level1NumE, level1A,
            level2NumE, level2A,
            level3NumE, level3A )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const insertPostRow = await connection.query(insertPostQuery, insertPostParams);

    return insertPostRow;
};



// 날짜별 운동기록 조회

async function selectRecord(connection, dayIdx,userIdx) {
    const selectPostsQuery = `
    select level1NumE,level1A,level2NumE,level2A,level3NumE,level3A
    from Record
    where dayIdx=? and userIdx= ?;
    `;

    const [postRows] = await connection.query(selectPostsQuery, [dayIdx,userIdx]);

    return postRows;
}



//dayIdx,uIdx,level,NumE,A
async function updatePost(connection, dayIdx,userIdx,level,NumE,A) {
    if(level==1){
    //${userIdResult[0].insertId}
    const updatePostQuery = `
        UPDATE Record
        SET level1A = (level1A*level1NumE+'?'*'?')/(level1NumE+'?'), 
            level1NumE = level1NumE+'?'
        WHERE dayIdx = ? and userIdx = ?;
    `;

    const updatePostRow = await connection.query(updatePostQuery, [A,NumE,NumE,NumE,dayIdx,userIdx]);
    return updatePostRow;
}
else if(level==2){
    const updatePostQuery = `
    UPDATE Record
    SET level2A = (level2A*level2NumE+'?'*'?')/(level2NumE+'?'), 
    level2NumE = level2NumE+'?'
    WHERE dayIdx = ? and userIdx = ?;
`;

const updatePostRow = await connection.query(updatePostQuery, [A,NumE,NumE,NumE,dayIdx,userIdx]);
return updatePostRow;
}
else if(level==3){
    const updatePostQuery = `
    UPDATE Record
    SET level3A = (level3A*level3NumE+'?'*'?')/(level3NumE+'?'), 
    level3NumE = level3NumE+'?'
    WHERE dayIdx = ? and userIdx = ?;
`;

const updatePostRow = await connection.query(updatePostQuery, [A,NumE,NumE,NumE,dayIdx,userIdx]);
return updatePostRow;
}

}
module.exports = {
    insertRecord,
    selectRecord,
    updatePost
  };