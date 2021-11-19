import React, { useState } from "react";
import { useCol, useFirebase } from "../Hooks/firebase";
import { useNavigate } from "react-router-dom";

export const SignUpScreen = () => {
  const navigate = useNavigate()
  const { auth } = useFirebase();
  const { createRecord } = useCol("users/");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const SignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;

        try {
          createRecord(user.uid, {
            uid: user.uid,
            username: username,
            email: email,
            phonenumber: number,
            profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
            posts: []
          });
          console.log("success");
          navigate("/");
        } catch {
          console.log("error");
        }
      })
      .catch((error) => {
        let errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input
        placeholder={"username"}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder={"email"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        maxLength={8}
        placeholder={"phone number"}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input
        placeholder={"password"}
        type={"password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={SignUp}>Sign up</button>
    </div>
  );
};
