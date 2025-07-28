// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi5-i-VntSC_qbqW7fLrStYNCBvhgYqVA",
  authDomain: "sonuport-9a2f9.firebaseapp.com",
  projectId: "sonuport-9a2f9",
  storageBucket: "sonuport-9a2f9.firebasestorage.app",
  messagingSenderId: "482506451775",
  appId: "1:482506451775:web:3734ebdbe50168b1e2018a",
  measurementId: "G-M4QQ2CR17Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};