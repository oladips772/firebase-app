/** @format */
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG9f1_zRo9lgJ7RkWe919HKje3Mdxuunk",
  authDomain: "login-app-ec84a.firebaseapp.com",
  projectId: "login-app-ec84a",
  storageBucket: "login-app-ec84a.appspot.com",
  messagingSenderId: "424425196979",
  appId: "1:424425196979:web:844dddd84383f24f280fc6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
const Gprovider = new GithubAuthProvider(app);

export { auth, db, provider, Gprovider };
