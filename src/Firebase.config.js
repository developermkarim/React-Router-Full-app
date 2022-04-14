// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId */
  apiKey: "AIzaSyACUdC4OI-2WdNrwAR2feaJ3Smf-cIBgts",
  authDomain: "genius-car-services-app.firebaseapp.com",
  projectId: "genius-car-services-app",
  storageBucket: "genius-car-services-app.appspot.com",
  messagingSenderId: "182372384957",
  appId: "1:182372384957:web:29e1056e3047cad4cdf7d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;