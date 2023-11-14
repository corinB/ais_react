import React, { useState } from 'react';
import { db ,authService} from "../firebais";
import { GoogleLogin } from './functions/loginSinup';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore"; 

async function userDataW(uid, email, name, birth, gender){

  await setDoc(doc(db, "Test", uid), {
    'email': email,
    'name': name,
    'birth':birth,
    'gender':gender,
  });
};


const Test =()=>{
  // const usersCollectionRef = collection(db, "user");
  const [userD, setUserD] = useState({
    name: '',
    birth:'',
    gender:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserD((prevUserD) => ({
      ...prevUserD,
      [name]: value,
    }));
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 사용자 데이터와 원하는 작업을 수행할 수 있습니다. 예를 들어 서버로 보내거나 상태에 저장할 수 있습니다.
    console.log('사용자 데이터 제출:', userD);
    onAuthStateChanged(authService, (user)=>{
      if(user){
        const uid = user.uid;
        const uemail = user.email;
        console.log(uid, uemail);
        userDataW(uid, uemail, userD.name, userD.birth, userD.gender);
      } else {
        console.log("사용자가 인증되지 않았습니다.");
      }
    });
  };

  
  return(
    <div>
      <div>
        <button onClick={GoogleLogin}>구글로그인</button>
      </div>
      <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" name="name" value={userD.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        생년월일:
        <input type="text" name="birth" value={userD.birth} onChange={handleChange} />
      </label>
      <br />
      <label>
        성별:
        <input type="text" name="gender" value={userD.gender} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
    </div>
  );
};

export default Test;