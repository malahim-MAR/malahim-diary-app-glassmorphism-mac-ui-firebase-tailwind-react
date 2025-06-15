// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd37WHhsj3dT1CuJelb2T3E5s0aflr1uo",
  authDomain: "persnal-diary.firebaseapp.com",
  projectId: "persnal-diary",
  storageBucket: "persnal-diary.firebasestorage.app",
  messagingSenderId: "58200790788",
  appId: "1:58200790788:web:79ed7409d441c92399e251"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);