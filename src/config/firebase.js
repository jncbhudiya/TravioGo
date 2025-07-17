import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIJ13A5Z7798AuffGFBDyg2Pq0wj-IjZU",
  authDomain: "travigo-1a0ea.firebaseapp.com",
  projectId: "travigo-1a0ea",
  storageBucket: "travigo-1a0ea.firebasestorage.app",
  messagingSenderId: "1035472138141",
  appId: "1:1035472138141:web:b428235788ec37417e0974",
  measurementId: "G-0MT2Y7L14Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth ,googleProvider};