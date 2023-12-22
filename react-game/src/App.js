import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberGuessingGameLimit from './NumberGuessingGameLimit';
import Quiz from './Quiz';

function App() {
  return (
    <Router>
      <div className="Container" mt-4>
        <h1 className="text-center">Game Website</h1>
        <nav className="nav justify-content-center mt-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/number-guessing-game" className="nav-link">
            Number Guessing Game
          </Link>
          <Link to="/quiz" className="nav-link">
            Quiz
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/number-guessing-game"
            element={<NumberGuessingGameLimit />}
          />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h2 className="text-center mt-3">어떤 게임을 플레이 하시겠습니까?</h2>
    </div>
  );
};

export default App;
