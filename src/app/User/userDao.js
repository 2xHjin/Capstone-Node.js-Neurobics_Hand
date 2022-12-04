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


async function selectUserIdx(connection, uName) {
  const selectUserEmailQuery = `
                SELECT userIdx
                FROM User
                WHERE uName = ?;
                `;
  const [emailRows] = await connection.query(selectUserEmailQuery, uName);
  return emailRows;
}

 module.exports = {
   insertUserInfo,
   selectUserIdx  };