import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListPage from './ListPage';
import CreatePage from './CreatePage';

function Todo() {
  const [action, setAction] = useState([]);

  //생성
  const addAction = (newAction) => {
    setAction([...action, newAction]);
  };

  //삭제
  const deleteAction = (id) => {
    setAction(action.filter((action) => action.id !== id));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<ListPage actions={action} deleteAction={deleteAction} />}
          />
          <Route path="/create" element={<CreatePage action={addAction} />}>
            생성
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Todo;
