import React from 'react'
import { Box, Text, Image, colors } from '../common-components'
import { useDoc } from '../Hooks';

export const HomeWorkCard = ({ imgUrl, price, description, uid, title }) => {
  const { data } = useDoc(`users/${uid}`)

  return (
    <Box width='300px' min_height='320px' br='10px' m='30px' borderColor={colors.borderColor} overflow='hidden'>
      <Image src={imgUrl} height='200px'/>
        <Box m='10px' display='flex' direction='column' justify='space-between' height='60px'>
          <Box display='flex' width='100%' direction='row'>
            <Image width='30px' height='30px' br='15px' src={imgUrl}/>
            <Box ml='10px'>
              <Text color={colors.textColor} fs='12px'>{data && data.username}</Text>
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