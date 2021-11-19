import React from 'react'
import { Box, Text, colors } from '../common-components';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import animationData from '../components/lotties/books-lottie.json';

export const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <Box width='100vw' height='100vh' background={colors.mainColor} display='flex' direction='row'items='center'>
      <Box m='18%'>
        <Text color={colors.supportColor} fs='35px'>Are you having any troubles with homeworks?</Text>
        <Text color={colors.supportColor} fs='18px'>Then we are here for you</Text>
        <Box mt='2%' pointer>
          <Text fs='40px' color='white' onClick={() => navigate('explore')}>Explore homeworks</Text>
          <Text fs='40px' color='white' onClick={() => navigate('add-post')}>Post homeworks</Text>
        </Box>
      </Box>
      <Box mr='100px' br='50px' overflow='hidden'>
        <Lottie animationData={animationData}/>
      </Box>
    </Box>
  );
}
