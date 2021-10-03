import firebase from 'firebase/app';
import 'firebase/auth';

// import dotenv from "dotenv"

// dotenv.config()

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "seona-imagecommunity.firebaseapp.com",
  projectId: "seona-imagecommunity",
  storageBucket: "seona-imagecommunity.appspot.com",
  messagingSenderId: "661466134731",
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
export { auth , apiKey};
