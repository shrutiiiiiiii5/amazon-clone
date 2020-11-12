import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2eBIsM9IIE5zmo74kJy5hXM1Qq63JYSI",
  authDomain: "challenge-8c50a.firebaseapp.com",
  databaseURL: "https://challenge-8c50a.firebaseio.com",
  projectId: "challenge-8c50a",
  storageBucket: "challenge-8c50a.appspot.com",
  messagingSenderId: "647895662850",
  appId: "1:647895662850:web:75edfeabbeaaf9ee37821b",
  measurementId: "G-794ZXVF8LP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
