/** @format */
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDivk6L-YZ74izEi-qKxplrhyQxqsqvwew",
  authDomain: "todo-app-923c9.firebaseapp.com",
  projectId: "todo-app-923c9",
  storageBucket: "todo-app-923c9.appspot.com",
  messagingSenderId: "826075716919",
  appId: "1:826075716919:web:a56ed4837d2f78d69a4eb2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
