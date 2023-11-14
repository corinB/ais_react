import { authService } from "../../firebais"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  createUserWithEmailAndPassword, // 회원가입
  signInWithEmailAndPassword,  //로그인
  sendEmailVerification // 이메일 인증
} from 'firebase/auth';



async function GoogleLogin() { // 임시 가입
  const as = authService
  const provider = new GoogleAuthProvider(); // provider 구글 설정 
  try{    
    let data = await signInWithPopup(as, provider) // 팝업창 띄워서 로그인
    console.log(data.user)
  }catch(e){
    console.log("로그인 실패")
  }
}

async function loginFun (email, password){ // 로그인
  try{    
    let data = await signInWithEmailAndPassword(authService,email,password)
    console.log(data.user);
  }catch(e){
    console.log("로그인 실패")
  }
}

async function signupFun (email, password){ //회원가입 임시 
  try{    
    let data = await createUserWithEmailAndPassword(authService,email,password)
    console.log(data.user)
    await sendEmailVerification(authService.currentUser)
    .then(() => {
      console.log('이메일 보냄')
    });
  }catch(e){
    console.log("회원가입 실패")
  }
}

export {GoogleLogin, loginFun, signupFun};