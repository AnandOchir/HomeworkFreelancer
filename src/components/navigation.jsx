import React from "react";
import { Box, colors, Text } from "../common-components";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box
      width="100vw"
      height="60px"
      background={colors.secondaryColor}
      top="0px"
      position="fixed"
      display="flex"
      justify="center"
    >
      <Box
        m="30px"
        display="flex"
        direction="row"
        justify="space-between"
        items="center"
        width="100vw"
      >
        <Box direction="row" display="flex">
          <Box pointer onClick={() => navigate("/")}>
            <Text color={colors.supportColor}>Home</Text>
          </Box>
          <Box ml='10px' pointer onClick={() => navigate("explore")}>
            <Text color={colors.supportColor}>Explore</Text>
          </Box>
          <Box ml="10px" pointer onClick={() => navigate("add-post")}>
            <Text color={colors.supportColor}>Post</Text>
          </Box>
        </Box>
        <Box direction="row" display="flex">
          <Box mr="20px" pointer onClick={() => navigate("login")}>
            <Text color={colors.supportColor}>Login</Text>
          </Box>
          <Box pointer onClick={() => navigate("sing-up")}>
            <Text color={colors.supportColor}>Sign Up</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
