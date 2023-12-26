const express = require('express');
const oracledb = require('oracledb');

// 가지고 온 express 활용하기 위한 app 생성
const app = express();
const PORT = 5000;

// 현재 도메인에서 포트번호를 5010만 사용하는 것이 아니라 리액트에서 가지고 온 포트번호도 사용할 것이기 때문에 cors를 사용
const cors = require('cors');

// 어떤 경로든 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

// Oracle 연결 정보
const dbConfig = {
  user: 'kh_cafe',
  password: '1234',
  connectString: 'localhost:1521/XE',
};
// db에 연결을 도와줄 express에서 json 파일로 db를 보여주는 것을 허락해서 json 형식으로 보여줄 수 있도록 설정
app.use(express.json());

async function runQuery(sql, binds = [], options = {}) {
  //String connection = null;
  let connection;

  try {
    //DB 연결 가져오기
    connection = await oracledb.getConnection(dbConfig);
    //가져온 결과를 return 을 활용해서 전달하기
    const result = await connection.execute(sql, binds, options);
    return result.rows;
  } catch (error) {
    console.error(err);
  }
}

//api endpoint 사용해서 백엔드 연결 설정. java 로 치면 컨트롤러
app.get('/', (request, response) => {
  response.send('백엔드 연결 성공.');
});

//DB와 제대로 연결되서 쿼리가 나오는지 확인
app.get('/api/menus', async (request, response) => {
  const menus = await runQuery('SELECT * FROM cafe');
  response.json(menus);
});

//서버가 제대로 실행되는지 확인하기 위해 콘솔창에 서버 시작을 알려줌
app.listen(PORT, () => {
  `서버가 시작되었습니다. : http://localhost:${PORT}`;
});
