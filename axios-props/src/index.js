import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import MovieList from './MovieList';
import DogImage from './DogInfo';
import User from './User';
import PostComment from './PostComment';
import MovieLists from './MovieListCarousel';
import TimeOut from './TimeOut';
import MovieListCarousel from './MovieListCarousel';
import RowColAlerts from './RowColAlerts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*MovieList />*/}
    {/*<DogImage />*/}
    {/*<User />*/}
    {/*<PostComment />*/}
    {/*<MovieLists />*/}
    {/*<TimeOut />*/}
    {/*<RowColAlerts />*/}
    <MovieListCarousel />
  </React.StrictMode>
);

reportWebVitals();
