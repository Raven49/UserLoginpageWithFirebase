// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBnMAixlQCvlNP9u6wdRM4gnHGbJKQqaT0",
  authDomain: "fir-auth-2201.firebaseapp.com",
  projectId: "fir-auth-2201",
  storageBucket: "fir-auth-2201.appspot.com",
  messagingSenderId: "947705697494",
  appId: "1:947705697494:web:bca507abd04ea1883ee577",
  measurementId: "G-4B52CWS0E8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};
