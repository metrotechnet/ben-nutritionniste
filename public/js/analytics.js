// Firebase Analytics via CDN (no ES module imports)
// Make sure to include these in your HTML before this script:
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics-compat.js"></script>

const firebaseConfig = {
  apiKey: "AIzaSyBo6TqA5BfIGPpVjRiC0KRqyYbrZ7dL890",
  authDomain: "bennutrionniste-web.firebaseapp.com",
  projectId: "bennutrionniste-web",
  storageBucket: "bennutrionniste-web.firebasestorage.app",
  messagingSenderId: "744612729982",
  appId: "1:744612729982:web:9cdcebeabfb6bc9af9342f",
  measurementId: "G-V7S967LKKL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
