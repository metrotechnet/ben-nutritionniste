// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCySPtmLDkCZtPA46DxdFyJN2rlMoTcYTs",
  authDomain: "bennutritionniste.firebaseapp.com",
  projectId: "bennutritionniste",
  storageBucket: "bennutritionniste.firebasestorage.app",
  messagingSenderId: "888298055246",
  appId: "1:888298055246:web:4a1602fa803dce5b49c51f",
  measurementId: "G-LB3NMLVC31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);