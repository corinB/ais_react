import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// 안알려줌

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "안알려줌",
  authDomain: "안알려줌",
  projectId: "안알려줌",
  storageBucket: "안알려줌",
  messagingSenderId: "안알려줌",
  appId: "안알려줌",
  measurementId: "안알려줌"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
const db = getFirestore(app);
export { app, db, authService };