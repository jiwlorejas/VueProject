// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVfxPemBrIlOLvPaBg5cXjXP0nUNrROsA",
  authDomain: "finalproject-e90d0.firebaseapp.com",
  databaseURL: "https://finalproject-e90d0-default-rtdb.firebaseio.com",
  projectId: "finalproject-e90d0",
  storageBucket: "finalproject-e90d0.appspot.com",
  messagingSenderId: "614923591661",
  appId: "1:614923591661:web:bd9207bef44accc58c11e4",
  measurementId: "G-7ZW1ZBSPRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);