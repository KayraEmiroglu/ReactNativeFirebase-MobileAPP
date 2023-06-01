// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPwHFglyoOzLJRY2bgc-dZQ3cW-4IIfGc",
  authDomain: "wounddetection-f45a5.firebaseapp.com",
  projectId: "wounddetection-f45a5",
  storageBucket: "wounddetection-f45a5.appspot.com",
  messagingSenderId: "759152015326",
  appId: "1:759152015326:web:0c7592b7cb9cf96bbdcf4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export default app;