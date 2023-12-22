import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cute333 from './img/cute333.jpg';

function App() {
  return (
    <div className='App'>
      <header className='bg-dark text-light py-5'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/*
        bg-dark : bg는 background. dark는 검정.
        text-light : 글자색 흰색으로 설정.
        py-5 : py는 padding-y.
        y : 위, 아래 여백을 조절.
        x : 좌, 우 여백을 조절.
        BootStrap은 여백의 크기를 1~5 까지 5단계로 제공.
        mb : margin-bottom
        img-fluid : 이미지를 반응형으로 보여질 수 있게 함. 부모 요소 크기에 맞게 조절. 더 작은 화면에서도 이미지가 꺠지지 않고 적절히 표현될 수 있도록 유지해준다. 모바일과 태블릿에서 유용하게 사용됨.
        rounded : 이미지의 모서리를 둥글게 만듬
        rounded-circle : 이미지를 원형으로 만듬
        img-thumbnail : 이미지에 경계선과 그림자 효과를 추가해서 작은 썸네일 이미지 만듬
        float-left / float-right : 이미지를 좌/우로 정렬.
        mx-auto : 가로 중앙 정렬.
        card : 정보를 시각적으로 보여주는데 사용.
        card-body : 카드의 내용을 감싸는 부분으로, 텍스트, 이미지와 같은 내용을 담는 공간.
        card-text : 카드에서 일반적인 텍스트 내용을 나타냄.
        card-title : 카드에서 제목을 나타냄.
        form-label : 사용자에게 입력하는 공간에 어떤 정보를 입력해줘야 하는지 알려주는 텍스트 라벨용.
        form-control : 부트스트랩 스타일에 맞게 스타일링 된 폼. 주로 입력필드에서 많이 사용. 텍스트, 이메일, 패스워드 입력 등에 사용.
        aria-describedby : 웹에서 label과 input의 설명요소를 지정할 때 사용. 따로 small, p 같은 태그를 걸어서 id 값으로 연결지어 사용.
        rows : 열의 크기 값.
        btn : 버튼.
        btn-primary : css 규격을 사용하는 곳은 대부분 primary 라는 말을 파란색 계열로 지정해서 사용중.
      */}
      <main className='container mt-2'>
        <section className='mb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src={Cute333}/>
            </div>
            <div className='col-md-6'>
              <h2>About</h2>
              <p>귀여운 강아지입니다.</p>
            </div>
          </div>
        </section>
        <section>
          <div className='row'>
            <div className='col-md-6'>
              <h2>About</h2>
              <p>귀여운 강아지입니다.</p>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src={Cute333}/>
            </div>
          </div>
        </section>
        <section className='mb-5'>
          <h2 className='mb-4'>섹션2</h2>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드1</h5>
                  <p className='card-text'>
                    안녕하세요 카드1 입니다.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드2</h5>
                  <p className='card-text'>
                    안녕하세요 카드2 입니다.
                  </p>
                </div>
              </div>
            </div>            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드3</h5>
                  <p className='card-text'>
                    안녕하세요 카드3 입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <form>
            <div className='mb-3'>
              <label className='form-label'>
                Name
              </label>
              <input type='text' className='form-control' id='name'/>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Email
              </label>
              <input type='email' className='form-control'
                aria-describedby='emailSmall'
              />
              <small id='emailSmall' className='form-text text-muted'>이메일</small>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                메세지 작성
              </label>
              <textarea rows="4" className='form-control'></textarea>
            </div>
          </form>
          <button className='btn btn-primary mb-3'>
            전송하기
          </button>
        </section>
      </main>
      <footer className='bg-dark text-light text-center py-3'>
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>
  );
}

export default App;