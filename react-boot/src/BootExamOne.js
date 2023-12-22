import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/*
        container : 본문을 담을 컨테이너를 생성.
        mt-4 : mt는 margin-top을 나타냄.
        margin-top : 본문의 위 크기를 조정하는 것.
        -4 : 상단 마진을 4로 설정.
        row : 컬럼을 나열하는데 사용.
        col-md-6 : col은 컬럼의 약자. md는 medium 6는 여섯개의 컬럼을 차지. 한줄의 컬럼은 12개로 구성.
      */}
      <main className='container mt-2'>
        <div className='row'>
          <div className='col-md-4'>
            <h2>하나</h2>
            <p>이것은 하나입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>둘</h2>
            <p>이것은 둘입니다</p>
          </div>
          <div className='col-md-4'>
            <h2>셋</h2>
            <p>이것은 셋입니다</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;