import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/menus')
      .then((res) => setMenus(res.data))
      .catch((error) => console.error('모두 불러오기 실패입니다.', error));
  }, []);

  return (
    <>
      <h1>MENU</h1>
      <ul>
        {menus.map((menu) => (
          <li key={menu[0]}>
            {menu[1]} : {menu[2]}원
          </li>
        ))}
      </ul>
    </>
  );
}
