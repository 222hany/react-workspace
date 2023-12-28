import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import { Footer } from './Component/Footer';
import Home from './Component/Home';
import MovieList from './Movie/MovieList';
import NumberGuessingGame from './Game/NumberGuessingGame';
import Quiz from './Game/Quiz';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route
              path="/numberGuessingGame"
              element={<NumberGuessingGame />}
            />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
