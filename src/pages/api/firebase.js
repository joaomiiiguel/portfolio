// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJVvCQkriTixnPWfenfhuGmBcMO49bd5k",
  authDomain: "portfoliomiguel-85654.firebaseapp.com",
  projectId: "portfoliomiguel-85654",
  storageBucket: "portfoliomiguel-85654.appspot.com",
  messagingSenderId: "445879919251",
  appId: "1:445879919251:web:f4d5c78c950ebb2fe76366",
  measurementId: "G-C7224059NJ",
  databaseURL: "https://portfoliomiguel-85654-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
