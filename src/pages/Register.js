/** @format */
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, provider,Gprovider } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      alert(err)
    );
  };

  const googleSignup = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        marginTop: 70,
        marginLeft: 70,
      }}
    >
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
      <button onClick={googleSignup}>Sign up with Google</button>
    </div>
  );
}

export default Register;
