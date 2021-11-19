import React from 'react'
import { Box, Text } from '../common-components';

export const PostScreen = () => {
  return (
    <Box width='100vw' height='100vh' background='orange' display='flex' direction='column'>
        <input type='file' onChange={(e) => console.log(e.target.value)}></input>
    </Box>
  );
}