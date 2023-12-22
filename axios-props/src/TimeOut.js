import React, { useEffect, useState } from 'react';

const TimeOut = () => {
    const [msg, setMsg] = useState(null);
    
    //Promise 타임아웃을 설정하는 함수
    useEffect(() => {
        //ms : 몇 초 만큼 지연시킬지 초 값을 설정해주기 위해 ms 라는 이름을 부여.(milliseconds)
        //Promise 는  ms 로 주어진 시간이 지난 후 실행 할 코드를 작성. fulfilled 를 하기위해 resolve 라는 변수명을 작성
        const delay = (ms) => {
            //Promise 는 사용할 때 새로운 객체를 생성해서 사용하기 때문에 new 를 붙여서 사용.
            return new Promise(resolve => setTimeout(resolve, ms))
        };

        //비동기작업 진행 후 타임아웃 설정
        //async : 자바스크립트에서 비동기작업을 다루는데 사용되는 키워드. 함수 앞에 async 를 선언하면 해당 함수는 암묵적으로 추후 Promise 를 반환할 것 이라고 설정하는 것.
        const waitTimeout = async () => {
            try{
                //비동기작업 시뮬레이션
                await delay(2000); //2초 동안 대기
                setMsg('시간이 지났습니다.');
            }catch(err){
                console.error('에러발생', err);
            }
        };
        waitTimeout();
    }, []);

    return(
        <>
            {msg ? (<p>{msg}</p>
            ):(
                <p>2초 대기하는 중</p>
            )}
        </>
    )
}

export default TimeOut;