// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR-QcgiHKcUQ0ik7Jrm5dVCzfqMLKjaME",
  authDomain: "personal-expense-tracker-38d4e.firebaseapp.com",
  databaseURL: "https://personal-expense-tracker-38d4e-default-rtdb.firebaseio.com",
  projectId: "personal-expense-tracker-38d4e",
  storageBucket: "personal-expense-tracker-38d4e.appspot.com",
  messagingSenderId: "716016577737",
  appId: "1:716016577737:web:e963c32bcb674d1f827118",
  measurementId: "G-M5YZJHM2CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth };

