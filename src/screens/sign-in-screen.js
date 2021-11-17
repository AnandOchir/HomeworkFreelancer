import React, { useState } from "react";
import { useCol, useFirebase } from "../Hooks/firebase";
import { useNavigate } from "react-router-dom";

export const SignInScreen = () => {
  const navigate = useNavigate()
  const { auth } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = () => {
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        navigate('/')
    })
    .catch((error) => {
      let errorMessage = error.message;
      console.log(errorMessage)
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        placeholder={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder={"password"}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SignIn}>Sign In</button>
    </div>
  );
};
