import React from "react";
import { Box, Text, colors } from "../common-components";

export const TagCard = ({ tag, onClick }) => {
  return (
    <Box
      min-width="60px"
      height="25px"
      background="white"
      borderColor={colors.borderColor}
      br="5px"
      display="flex"
      justify="center"
      items="center"
      pointer
      m="5px"
      onClick={onClick}
      p='5px'
    >
      <Text fs="12px" color="orange">
        {tag}
      </Text>
    </Box>
  );
};
