import React from 'react'
import { Box, Text, Image, colors } from '../common-components'

export const HomeWorkCard = ({ imgUrl, name, price, description, uid, title }) => {
  console.log(name, price)
  return (
    <Box width='300px' min_height='320px' br='10px' m='30px' borderColor={colors.borderColor} overflow='hidden'>
      <Image src={imgUrl} height='200px'/>
        <Box m='10px' display='flex' direction='column' justify='space-between' height='60px'>
          <Box display='flex' width='100%' direction='row'>
            <Image width='30px' height='30px' br='15px' src='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
            <Box ml='10px'>
              <Text color={colors.textColor} fs='12px'>{name}</Text>
              <Text color={colors.textSoftColor} fs='12px'>{title}</Text>
            </Box>
          </Box>
          <Box min_height='20px'>
            <Text color={colors.textColor} fs='14px'>{description}</Text>
          </Box>
        </Box>
        <Box height='1px' width='100%' background={colors.borderColor}/>
        <Box m='10px' display='flex' direction='row' items='center' justify='space-between'>
          <Text fs='10px'>Like</Text>
          <Text fs='14px'>{price}MNT</Text>
        </Box>
    </Box>
  );
}