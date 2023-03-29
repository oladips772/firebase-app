/** @format */
import { useState } from "react";
import { db } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
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
    </div>
  );
}

export default Register;
