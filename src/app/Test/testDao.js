async function SelectTestId(connection, qIdx) {
    const selecttestIdxQuery1 = `
                   SELECT question
                   FROM Test 
                   WHERE qIdx = ?;
                   `;
    const [testRow] = await connection.query(selecttestIdxQuery1, qIdx);
    return testRow;
  }
 

  module.exports = {
    SelectTestId
  };
  