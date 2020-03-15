import firebase from "firebase/app";
// Initialize Firebase
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXH6BVMkbhjlKbkjPPftxxW31RoiClItA",
  authDomain: "dog-potty-tracker.firebaseapp.com",
  databaseURL: "https://dog-potty-tracker.firebaseio.com",
  projectId: "dog-potty-tracker",
  storageBucket: "dog-potty-tracker.appspot.com",
  messagingSenderId: "983684644475",
  appId: "1:983684644475:web:850cdd177084f5400aecde",
  measurementId: "G-RDBX7N8KZF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// Initialize Cloud Firestore through Firebase
export const firestore = firebase.firestore();
export default firebase;
// Your web app's Firebase configuration
