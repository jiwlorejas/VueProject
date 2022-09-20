import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

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
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }
