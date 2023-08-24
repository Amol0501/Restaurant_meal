// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1w1fVGAOyCQo-oWqDUq7VNxe4qpnOdFc",
  authDomain: "react-meal-http-e5678.firebaseapp.com",
  projectId: "react-meal-http-e5678",
  storageBucket: "react-meal-http-e5678.appspot.com",
  messagingSenderId: "23816682744",
  appId: "1:23816682744:web:989c31f9e9b63975540f0d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
