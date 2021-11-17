import React from 'react'
import { Box, Text, colors } from '../common-components';
import { useHistory } from 'react-router-dom';

export const HomeScreen = () => {
  const history = useHistory();

  return (
    <Box width='100vw' height='100vh' background={colors.mainColor} display='flex' direction='column'>
      <Box m='18%'>
        <Text color={colors.supportColor} fs='35px'>Are you having any troubles with homeworks?</Text>
        <Text color={colors.supportColor} fs='18px'>Then we are here for you</Text>
        <Box mt='2%' pointer>
          <Text fs='40px' color='white' onClick={() => history.push('explore')}>Explore homeworks</Text>
          <Text fs='40px' color='white' onClick={() => history.push('explore')}>Post homeworks</Text>
        </Box>
      </Box>
    </Box>
  );
}
