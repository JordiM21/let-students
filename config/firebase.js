// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClZ328ZofnBfnJTGasYuQ8O8V3dFNexrM",
  authDomain: "let-students.firebaseapp.com",
  projectId: "let-students",
  storageBucket: "let-students.appspot.com",
  messagingSenderId: "29471672286",
  appId: "1:29471672286:web:d453af022b2f973c8fff4f",
  measurementId: "G-P7YLPBXYJS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);


