import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './Todo';

function App() {
  const Home = () => <div>홈페이지</div>;

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" />
          </li>
          <li>
            <Link to="/todolist" />
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todolist" element={<Todo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
