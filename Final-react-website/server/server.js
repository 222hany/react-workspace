const express = require('express');
const oracledb = require('oracledb');
const cors = require('cors');

const app = express();
const PORT = 5003;

//들어오는 url 허용을 안해준 상태. get 으로 가져가는 주소만 허용해준것.
//app.use(cors());
//post로 전달받을 url 주소도 허용할 수 있도록 넣어줌. get, post 둘다 가능.
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

const dbconfig = {
  user: 'kh_cafe',
  password: '1234',
  connectString: 'localhost:1521/XE',
};

async function selectQuery(sql) {
  let connection;

  try {
    //DB와 연결
    connection = await oracledb.getConnection(dbconfig);
    const result = await connection.execute(sql);

    return result.rows.map((row) => ({
      ID: row[0],
      NAME: row[1],
      PRICE: row[2],
    }));
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

//연결 확인
app.listen(PORT, () => {
  console.log(`서버시작 : http://localhost:${PORT}`);
});

app.get('/api/cafe', async (request, reponse) => {
  const cafe = await selectQuery('SELECT * FROM cafe');
  reponse.json(cafe);
});

//post 로 전달받을 쿼리 작성
app.post('/api/cafes', async (request, response) => {
  const { NAME, PRICE } = request.body;
  console.log('데이터 들어왔는지 확인', { NAME, data });

  let connection;

  try {
    connection = await oracledb.getConnection(dbconfig);
    await connection.execute(
      'INSERT INTO cafe(ID, NAME, PRICE) VALUES (CAFE_SEQ.NEXTVAL, :NAME :PRICE)',
      { NAME, PRICE },
      { autoCommit: true }
    );
    reponse.json({ message: '성공적으로 저장되었습니다.' });
  } catch (error) {
    console.error('ERROR in POST/api/cafes', error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('커넥션 닫기 에러', err);
      }
    }
  }
});
