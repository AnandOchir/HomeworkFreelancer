import React, { useState } from "react";
import { useCol, useFirebase } from "../Hooks/firebase";
import { useNavigate } from "react-router-dom";
import { Text, Box, colors, Input, Button } from "../common-components/";

export const SignUpScreen = () => {
  const navigate = useNavigate();
  const { auth } = useFirebase();
  const { createRecord } = useCol("users/");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const SignUp = () => {
    setLoading("Loading ...");
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
            profileImg:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            posts: [],
          });
          setLoading("success");
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
    <Box
      color={colors.mainColor}
      width={"100%"}
      height={`${window.innerHeight - 60}px`}
      display={"flex"}
      justify={"center"}
      items={"center"}
    >
      <Box
        br={"15px"}
        shadow={true}
        color={"white"}
        display={"flex"}
        direction={"column"}
        width={"30vw"}
        height={"600px"}
        mt={"15px"}
        items={"center"}
      >
        <Box width={"100%"}>
          <Text
            m={"10px"}
            mt={"30px"}
            textAlign={"center"}
            fw={600}
            fs={"30px"}
          >
            Sign Up
          </Text>
          <Box
            mb={"20px"}
            width={"100%"}
            display={"flex"}
            items={"center"}
            direction={"column"}
          >
            <Text opacity={"0.5"}>Username</Text>
            <Input
              focus
              width={"80%"}
              borderColor={"black"}
              br={"5px"}
              p={"5px"}
              fs={"20px"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Box>
          <Box
            mb={"20px"}
            width={"100%"}
            display={"flex"}
            items={"center"}
            direction={"column"}
          >
            <Text opacity={"0.5"}>Email</Text>
            <Input
              focus
              width={"80%"}
              borderColor={"black"}
              br={"5px"}
              p={"5px"}
              fs={"20px"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box
            mb={"20px"}
            width={"100%"}
            display={"flex"}
            items={"center"}
            direction={"column"}
          >
            <Text opacity={"0.5"}>Phone Number</Text>
            <Input
              focus
              width={"80%"}
              borderColor={"black"}
              br={"5px"}
              p={"5px"}
              fs={"20px"}
              maxLength={8}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Box>
          <Box
            mb={"20px"}
            width={"100%"}
            display={"flex"}
            items={"center"}
            direction={"column"}
          >
            <Text opacity={"0.5"}>Password</Text>
            <Input
              focus
              width={"80%"}
              borderColor={"black"}
              br={"5px"}
              p={"5px"}
              fs={"20px"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>
        <Text>{loading}</Text>
        <Button
          p={"5px"}
          width={"200px"}
          height={"40px"}
          fs={"17px"}
          fw={"bold"}
          bcolor={colors.mainColor}
          br={"5px"}
          mt={"20%"}
          borderColor={colors.mainColor}
          onClick={SignUp}
          pointer
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
};
