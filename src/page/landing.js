import './landing.css';
import React, { useState } from 'react';
import { authService } from '../firebais'; 
import {
  createUserWithEmailAndPassword, // 회원가입
  signInWithEmailAndPassword  //로그인
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider} from 'firebase/auth'; 
import { signInWithPopup } from 'firebase/auth';
import { GoogleLogin, loginFun, signupFun } from './functions/loginSinup';



export const Landing = () =>{
  const [userData, setUserData] = useState(null);
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  // console.log(authService)

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(authService, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data.user.email); // console에 UserCredentialImpl 출력
        navigate('/email-auth', { state: { email: data.user.email } });      })
      .catch((err) => {
        console.log(err);
      });
      console.log();
  }

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  async function onSubmit (event){
    event.preventDefault();
    console.log(email,password);
    signupFun(email,password);
    console.log(authService.currentUser)
    //navigate('/email-auth', { state: { email } });
  }

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래쪽에 이름이 나타납니다.</h4>
      <div>
        {userData
          ? "당신의 이름은 : " + userData.displayName
          : "로그인 버튼을 눌러주세요 :)"}
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value="Log-In" />
      </form>
    </div>
    
  );
  };



