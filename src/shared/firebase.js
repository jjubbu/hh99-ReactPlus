import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCpYeK6vspVXkxZDgTBLragMVRTKvs8Imw",
  authDomain: "seona-imagecommunity.firebaseapp.com",
  projectId: "seona-imagecommunity",
  storageBucket: "seona-imagecommunity.appspot.com",
  messagingSenderId: "661466134731",
  appId: "1:661466134731:web:c7ecb50f298d3126e5c34e",
  measurementId: "G-6ZXFTEHM6V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { auth , apiKey, firestore, storage};
