// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import 'firebase/compat/firestore'
import firebase from "firebase/compat/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsJi9j7YzFXjWWo3XGxxe8P_J-iPJW5Z0",
  authDomain: "gestion-budgetaire-a2618.firebaseapp.com",
  projectId: "gestion-budgetaire-a2618",
  storageBucket: "gestion-budgetaire-a2618.appspot.com",
  messagingSenderId: "723407929060",
  appId: "1:723407929060:web:d8070d30b0e9fdf09cf6f1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();