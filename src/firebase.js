import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbC3_ktf1NrDzROnACxixjCHvoKJ2G6xY",
  authDomain: "robinhood-1bfb6.firebaseapp.com",
  projectId: "robinhood-1bfb6",
  storageBucket: "robinhood-1bfb6.appspot.com",
  messagingSenderId: "366928709971",
  appId: "1:366928709971:web:a60b662facfbe9bafeb9a6",
  measurementId: "G-EJ3CE7MCDT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
