import React from "react";
import { Box, Text, colors } from "../common-components";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../components/lotties/books-lottie.json";

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Box width='100vw' height='100vh' background={colors.mainColor} display='flex' direction='row'items='center'>
      <Box m='18%'>
        <Text color={colors.supportColor} fs='24px' width='250px'>Welcome to shine mongol it club website!!!</Text>
        <Box mt='10vh' pointer>
          <Text fs='48px' color='white' hover onClick={() => navigate('explore-clubs')}>Explore clubs</Text>
        </Box>
      </Box>
      <Box mr="100px" br="50px" overflow="hidden">
        <Lottie animationData={animationData} />
      </Box>
    </Box>
  );
};
