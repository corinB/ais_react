import { useTimer } from "./functions/timser";
import React, { useState } from 'react';
import { authService } from "../firebais";
import { useLocation } from 'react-router-dom';

const EmailAuth = () => {
  const { count, handleRestart, handleStop, timePlus } = useTimer();
  const [flag, setFlag] = useState(false);
  const location = useLocation();
  const email = location.state && location.state.email;


  return (
    <div>
      {flag ? (<>
        <h4>이메일 인증 완료</h4>
      </>

      ) : (
        <>
        <h4>{email}로 인증 코드를 보냈습니다. 타이머가 끝나기 전에 인증 코드를 작성해 주세요</h4>
        <p>{`${count.min}분 ${count.sec}초`}</p>
        <button onClick={handleRestart}>재시작</button>
        <button onClick={handleStop}>정지</button>
        <button onClick={timePlus}>1분 추가</button>
        </>
      )}


    </div>
  );
};

export default EmailAuth;
