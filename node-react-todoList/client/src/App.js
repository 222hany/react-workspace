import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  /*
  useEffect(() => {
    //추후 server 에서 express 를 활용해 todos 데이터를 가져올 것.
    fetch('/')
    .then((res) => res.json())
    .then((data) => setTodos(data))
    .catch((error) => console.error('에러가 발생했습니다.', error));
  });
  */

  //fetch 를 npm i axios 로 axios 설치해서 axios 코드로 변경하기
  useEffect(() => {
    axios
      //데이터 가져오기
      .get('http://localhost:3000/api/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error('에러가 발생했습니다.', error));
  }, []);

  return (
    <div>
      <h1>To do list</h1>
      <ul>
        <li>
          {todos.map((todo) => (
            <li key={todo[0]}>{todo[1]}</li>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default App;
