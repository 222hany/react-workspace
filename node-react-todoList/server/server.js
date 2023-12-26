//백엔드 js 를 실행하기 위한 파일을 생성해준 것이며 파일명은 굳이 server.js 를 사용하지 않아도 됨.
//react 처럼 함수(컴포넌트) 를 사용하지 않음. -> return 을 사용해서 div 를 사용할 일이 없음.

//oracledb 를 연동하기 위해 oracledb 요청하는 함수 작성.
//중간에 역할해주는(jdbc 와 같은 역할을 하는) express 를 요청하는 함수 생성.
const oracledb = require('oracledb');
const express = require('express');

//가져온 express 를 사용하기 위한 app 생성
const app = express();
//백엔드 전용 포트번호
const PORT = 5000;

//만약 추후 다른 도메인에서 요청이 들어올 경우 요청을 허용해주는 cors 를 설치한 후 생성 -> npm i cors
const cors = require('cors');
//모든 경로에서 백엔드에 오는 요청을 사용할 수 있도록 허용
app.use(cors());

//DB 연결 정보 작성
const dbConfig = {
  //user, password, connectString 는 모두 고정 값
  user: 'khbank',
  password: '1234',
  connectString: 'localhost:1521/XE',
};

//Express 로 백엔드에서 가져 온 데이터를 사용할 수 있게 설정
app.use(express.json());

//oracle 연결하기 위한 connection 과 sql 쿼리 실행 함수를 생성
//sql 쿼리와 쿼리로 인해 발생한 변수, 추가옵션을 지정해서 DB 와 상호작용
//async 를 이용해서 비동기작업을 수행
async function runQuery(sql, binds = [], options = {}) {
  let connection;

  //try{} catch{} finally{}
  //try : DB 연결을 실행하고 쿼리도 실행 만약 오류가 발생하면 catch 를 사용해서 콘솔에 에러를 출력할 수 있게 설정.
  //finally : 만약 DB 를 닫고 싶다면 연결을 닫을 수 있도록 설정.
  try {
    //await 를 이용해서 비동기적으로 연결을 기다림
    connection = await oracledb.getConnection(dbConfig);

    //실행결과는 result 에 저장함
    //.execute 를 이용해서 쿼리를 실행할 수 있도록 함
    const result = await connection.execute(sql, binds, options);

    //쿼리 실행 결과에서 행 정보를 모두 반환하겠다 표기
    //return result.rows;
    return result.rows.map((row) => ({
      ID: row[0],
      TASK: row[1],
    }));
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        close.error(err);
      }
    }
  }
}

//이제는 API 를 사용해서 백엔드 연결을 설정
app.get('/', (request, response) => {
  response.send('백엔드 연결 성공');
});

//api 를 활용해서 db 쿼리에 작성한 내용 가져오기
app.get('/api/todos', async (request, response) => {
  const todos = await runQuery('SELECT * FROM todos');
  response.json(todos);
});

//우리가 연결한 포트에 정상적으로 연결되었는지 확인하기 위한 콘솔문 출력
app.listen(PORT, () => {
  console.log(`서버시작 : http://localhost:${PORT}`);
});
