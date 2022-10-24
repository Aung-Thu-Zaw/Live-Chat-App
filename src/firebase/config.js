import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASe-sSM8_kUAYtDtv2z7fETk6Y_10AM48",
  authDomain: "fir-9-learning-8d148.firebaseapp.com",
  projectId: "fir-9-learning-8d148",
  storageBucket: "fir-9-learning-8d148.appspot.com",
  messagingSenderId: "368570412204",
  appId: "1:368570412204:web:6a8bbd509fcb9cf7d24309",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const timestamp = serverTimestamp();

const auth = getAuth();

export { db, timestamp, auth };
