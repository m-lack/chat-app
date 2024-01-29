// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAChjUOAvr3AM5uBIiDgR_LXIXHV8TbCTQ",
  authDomain: "chat-app-c42a8.firebaseapp.com",
  projectId: "chat-app-c42a8",
  storageBucket: "chat-app-c42a8.appspot.com",
  messagingSenderId: "350552407148",
  appId: "1:350552407148:web:5eef29ac96e7fd97432c49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
