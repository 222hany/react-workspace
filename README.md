1. nodeJs 설치
   nodeJs 명령어를 사용해서
   파일을 설치하거나 버전을 업데이트하거나
   추가적으로 필요한 라이브러리나 프레임워크를 설치할 수 있음
   nodeJs = 앱스토어

2. nodeJS 항목에 있는 npx 라는 것을 사용해서
   react를 세팅할 수 있음
   세팅하는 명령어 : npx create-react-app 내가작성하고싶은폴더명
   폴더명 : 대문자가 들어가서는 안되며, -와 소문자를 활용해서 폴더명을 지을 것

실행할 때는 npm start를 사용해서 실행

리액트를 실행하다가 중간에 필요한 패키지가 발생할 수 있음
그럴 때는 npm install이나 npm i를 사용해서 추가로 패키지를 설치하면 됨
대표적으로 많이 사용했던 패키지는
css : npm i bootstrap
(className으로 사용하는 부트스트랩
내가 추가하고싶은 부트스트랩 기능을 "띄어쓰기" 활용해서 원하는대로 작성 가능)
npm i react-bootstrap
(컴포넌트(함수)로 사용하는 부트스트랩)

       npm i mui에 설치된 명령어

js : npm i react-router-dom (링크를 오고 갈 수 있도록 허용)
npm i axios (fetch의 최신버전 설치를 해주며 get post를 원활하게 이용 가능)

get : 서버에 원하는 정보를 요청할 때 사용 (read , select)
post : form에 사용자가 작성한 데이터내용을 백엔드로 전송하는데 사용

git 에 올릴 때 유의사항
git에 올릴 때는 node_modules 폴더와 package-lock.json 파일은
삭제하거나 .gitignore 사용해서 github에 올라가지 못하도록 함
그리고 컴퓨터에 용량이 부족하다 하면 node_modules 폴더를 삭제해줄 것

단! package.json은 절대로 삭제하지 말 것
추후 node_modules 이나 package-lock.json 이 없다면
npm i 를 사용해서 node_modules 와 package-lock.json 둘 다 설치해줄 것이지만
설치를 해줄 때 package.json 이 없다면 설치를 할 수 없음

3. 백엔드에서 데이터를 react(프론트엔드)로 전송하기 위해서는
   주로 db에 있는 내용을 json 형식으로 다듬어서 전달해줌
   백엔드를 세팅하기 위해서 사용하는 명령어 :
   cmd창에 mkdir 백엔드폴더명 작성해주거나 오른쪽마우스로 폴더생성 해줌
   (단! 리액트 폴더 안에 백엔드 폴더를 생성해주는 것이 아니라
   리액트 폴더 바깥에 폴더를 만들어줘야함)
   cd 백엔드폴더명 으로 들어가거나 또는 더블 클릭해서 폴더로 들어감
   폴더로 들어간 후
   npm init (init = 초기 세팅)
   npm express oracledb cors
   npm start ( js 파일이 하나 있을 때 사용할 수 있는 명령어)
   node js파일명.js (js 파일이 두 개 이상일 때 선택해서 파일을 실행할 수 있음)

프론트엔드는 코드를 수정하면 가상의 돔이 계속 수정된 내용을 반영해서
자동으로 새로고침이 되지만 백엔드는 한 번 껐다가 다시 실행해줘야함
여기에서 포트번호는 수정되면 둘 다 모두 껐다가 다시 실행해줘야함
