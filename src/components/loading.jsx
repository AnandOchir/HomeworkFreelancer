import React from "react";
import { Box } from "../common-components";
import Lottie from "lottie-react";
import animationData from "./lotties/loading-lottie.json";

export const Loading = ({ size = "600px" }) => {
  return (
    <Box width='100vw' height='100vh' display='flex' items='center' justify='center'>
      <Box width={size}>
        <Lottie animationData={animationData} />
      </Box>
    </Box>
  );
};
