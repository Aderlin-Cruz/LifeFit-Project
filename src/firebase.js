import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlafVH8bjOdhw2m1UjgtmOrz_PUrxPtSU",
  authDomain: "crud-udemy-react-68f28.firebaseapp.com",
  projectId: "crud-udemy-react-68f28",
  storageBucket: "crud-udemy-react-68f28.appspot.com",
  messagingSenderId: "738742114117",
  appId: "1:738742114117:web:74a17c50838ba81d11d02c",
};
//Initilize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, firebase, db, storage };