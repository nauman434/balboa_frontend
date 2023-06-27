import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

var firebaseApp = firebase.initializeApp({
  // apiKey: 'AIzaSyAJAp78lJhubzyBGTz08gYfVs_K2qxM0Bc',
  // authDomain: 'balboa-firebase.firebaseapp.com',
  // projectId: 'balboa-firebase',
  // storageBucket: 'balboa-firebase.appspot.com',
  // messagingSenderId: '290969832746',
  // appId: '2909691:290969832746:web:1bc2f1cec9b9f3a436e253832746'
  apiKey: "AIzaSyCVAgWAj5XERkujTAFJXN33MFWK835u17s",
  authDomain: "balboa-5d78c.firebaseapp.com",
  projectId: "balboa-5d78c",
  storageBucket: "balboa-5d78c.appspot.com",
  messagingSenderId: "124404899085",
  appId: "1:124404899085:web:13f378d03212a96e39e444",
  measurementId: "G-T0FNBQYHX5",
});

var db = firebaseApp.firestore();
const auth = getAuth();

export { db, auth };
