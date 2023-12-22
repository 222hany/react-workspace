axios : 자바스크립트나 리액트에서 http 요청을 수행하기 위한 라이브러리. 주로 웹 서버와 통신, API 호출, 데이터 가져오기 작업에 사용.

사용법 : npm install axios / yarn install axios

    useEffect(() => {
        //Axios 를 활용해서 API GET 요청
        axios.get('https://jsonplaceholder.typicode.com/todos')
        
        //axios.get 로 데이터를 가져오는데 성공한다면 then 을 사용해서 응답받을 데이터를 처리.
        //응답을 받을때는 response 로 서버에서 받은 응답을 표시. reponse 가 실제로 요청에 관한 정보와 서버에서 실제로 반환 된 데이터를 보여줌.
        //reponse 를 활용해서 전달받은 데이터를 업데이트해서 화면에 보여주기위해 setData 를 활용.
        .then(response => {
            setData(response.data);
        })

        //데이터를 가져오는데 실패 할 경우 catch 문을 활용해서 에러를 표시.
        //에러를 표기할 때는 console.log 를 활용해서 개발자들 간에 보여질 수 있도록 표기. error 는 변수명일뿐 다른 변수명으로 변경해서 표기해도 좋음.
        .catch(error => {("", error)});
    });