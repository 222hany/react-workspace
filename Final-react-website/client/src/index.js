import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//index.js 가 최상위 js 이기 때문에 경로문제로 인해 제일 위에도 bootstrap 을 넣어줌
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MusicPlayer from './Music/MusicPlayer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MusicPlayer />
  </React.StrictMode>
);

reportWebVitals();
