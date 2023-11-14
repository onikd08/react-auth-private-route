// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOdlXDXGIzSNYEyT_sOW_6S6Ib-EslZHY",
  authDomain: "react-auth-private-route-f7bc9.firebaseapp.com",
  projectId: "react-auth-private-route-f7bc9",
  storageBucket: "react-auth-private-route-f7bc9.appspot.com",
  messagingSenderId: "1083297977508",
  appId: "1:1083297977508:web:675525a6b07f053a404231",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
