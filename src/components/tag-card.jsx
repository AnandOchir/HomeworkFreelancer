import React from "react";
import { Box, Text, colors } from "../common-components";

export const TagCard = ({ tag, onClick, clicked = false }) => {
  return (
    <Box
      width="100px"
      height="25px"
      background="white"
      borderColor={clicked ? colors.borderActiveColor : colors.borderColor}
      br="5px"
      display="flex"
      justify="center"
      items="center"
      pointer
      m="5px"
      onClick={onClick}
      p='5px'
    >
      <Text fs="12px" color="#0000FF">
        {tag}
      </Text>
    </Box>
  );
};
