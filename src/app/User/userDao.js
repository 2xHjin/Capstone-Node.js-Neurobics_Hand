// 유저 생성
async function insertUserInfo(connection, insertUserInfoParams) {
  const insertUserInfoQuery = `
        INSERT INTO User(uName)
        VALUES (?);
    `;
  const insertUserInfoRow = await connection.query(
    insertUserInfoQuery,
    insertUserInfoParams
  );

  return insertUserInfoRow;
}


async function selectUserIdx(connection, uIdx) {
  const selectUserEmailQuery = `
                SELECT uName
                FROM User
                WHERE userIdx = ?;
                `;
  const [emailRows] = await connection.query(selectUserEmailQuery, uIdx);
  return emailRows;
}

 module.exports = {
   insertUserInfo,
   selectUserIdx  };