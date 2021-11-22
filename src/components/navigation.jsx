import React, { useContext } from "react";
import { AnimatedText, Box, colors, Animation } from "../common-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Providers/auth-provider'

export const Navigation = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)
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
        justify="space-around"
        items="center"
        width="100vw"
      >
        <Box direction="row" display="flex" width="15%" justify="space-between">
          <Box pointer onClick={() => navigate("/")}>
            <AnimatedText >Home</AnimatedText>
          </Box>
          <Box ml='10px' pointer onClick={() => navigate("explore-posts")}>
            <AnimatedText >Explore</AnimatedText>
          </Box>
          <Box ml="10px" pointer onClick={() => navigate("add-post")}>
            <AnimatedText >Post</AnimatedText>
          </Box>
        </Box>
        <Box direction="row" display="flex" width="10%" justify="space-between">
          {
            user && user.email ?
              <Box onClick={() => navigate("/profile")} mr="20px" pointer>
                <AnimatedText >{user.email}</AnimatedText>
              </Box>
              :
              <>
                <Box mr="20px" pointer onClick={() => navigate("sign-in")}>
                  <AnimatedText >Login</AnimatedText>
                </Box>
                <Box pointer onClick={() => navigate("sign-up")}>
                  <AnimatedText >Sign Up</AnimatedText>
                </Box>
              </>
          }
        </Box>
      </Box>
    </Box>
  );
};
