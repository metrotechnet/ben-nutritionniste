// Firebase Analytics via CDN (no ES module imports)
// Make sure to include these in your HTML before this script:
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics-compat.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyCySPtmLDkCZtPA46DxdFyJN2rlMoTcYTs",
  authDomain: "bennutritionniste.firebaseapp.com",
  projectId: "bennutritionniste",
  storageBucket: "bennutritionniste.firebasestorage.app",
  messagingSenderId: "888298055246",
  appId: "1:888298055246:web:4a1602fa803dce5b49c51f",
  measurementId: "G-LB3NMLVC31"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();