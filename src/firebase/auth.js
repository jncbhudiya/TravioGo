// lib/firebase/auth.js
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  linkWithPopup,
} from "firebase/auth";

// Google Sign-In
export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

// Email/Password Sign-Up
export async function signUpWithEmail(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

// Email/Password Sign-In
export async function signInWithEmail(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

// Link Google to an existing account
export async function linkGoogleProvider() {
  const provider = new GoogleAuthProvider();
  if (auth.currentUser) {
    await linkWithPopup(auth.currentUser, provider);
  }
}

// Sign Out
export async function logout() {
  await signOut(auth);
}
