import React, { useState, useEffect } from "react";
import { useCol, useFirebase } from "../Hooks/firebase";
import { useNavigate } from "react-router-dom";
import { Text, Box, colors, Input, Button } from "../common-components/";

export const SignInScreen = () => {
  const navigate = useNavigate();
  const { auth } = useFirebase();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [email, password]);

  const SignIn = () => {
    setLoading("Loading ...");
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setLoading("success");
        navigate("/");
      })
      .catch((error) => {
        let errorMessage = error.message;
        setError(errorMessage);
        setLoading("");
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
        height={"500px"}
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
            Login
          </Text>
          <Box
            mb={"20px"}
            width={"100%"}
            display={"flex"}
            items={"center"}
            direction={"column"}
          >
            <Text opacity={"0.5"}>Email</Text>
            <Input
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
            <Text opacity={"0.5"}>Password</Text>
            <Input
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
        <Text>{error == "" ? loading : error}</Text>
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
          pointer
          onClick={SignIn}
        >
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};
