// userPost 조회
async function selectUserPost(connection, uIdx,dayIdx) {
    const selectUserIdxQuery = `
                   SELECT uIdx,dayIdx,level1A,level1NumE,level2A,level2NumE,level3A,level3NumE
                   FROM Record 
                   WHERE uIdx = ? and dayIdx = ?;
                   `;
    const [userRow] = await connection.query(selectUserIdxQuery, uIdx, dayIdx);
    return userRow;
  }