import React, { useContext } from "react";
import { Box, colors, Text } from "../common-components";
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
        justify="space-between"
        items="center"
        width="100vw"
      >
        <Box direction="row" display="flex">
          <Box pointer onClick={() => navigate("/")}>
            <Text color={colors.supportColor}>Home</Text>
          </Box>
          <Box ml='10px' pointer onClick={() => navigate("explore-posts")}>
            <Text color={colors.supportColor}>Explore</Text>
          </Box>
          <Box ml="10px" pointer onClick={() => navigate("add-post")}>
            <Text color={colors.supportColor}>Post</Text>
          </Box>
        </Box>
        <Box direction="row" display="flex">
          {
            user && user.email ?
              <Box onClick={() => navigate("/profile")} mr="20px" pointer>
                <Text color={colors.supportColor}>{user.email}</Text>
              </Box>
              :
              <>
                <Box mr="20px" pointer onClick={() => navigate("sign-in")}>
                  <Text color={colors.supportColor}>Login</Text>
                </Box>
                <Box pointer onClick={() => navigate("sign-up")}>
                  <Text color={colors.supportColor}>Sign Up</Text>
                </Box>
              </>
          }
        </Box>
      </Box>
    </Box>
  );
};
