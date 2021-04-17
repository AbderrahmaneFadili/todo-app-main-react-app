import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3fm4jMEunNb6iML7XapgAbUtgAEgK4TU",
  authDomain: "frontendmentor-todo-app.firebaseapp.com",
  projectId: "frontendmentor-todo-app",
  storageBucket: "frontendmentor-todo-app.appspot.com",
  messagingSenderId: "1000252983947",
  appId: "1:1000252983947:web:ceb1621d0dac04ba42e28e",
  measurementId: "G-MNKHYBLG97",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
