import React, { useState } from "react";
import { Box, Text, colors } from "../common-components";
import { PopUp } from "../components/pop-up";

export const ExploreClubs = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      items="center"
      direction="column"
    >
      <PopUp open={open} setOpen={setOpen} img={img} setImg={setImg}/>
      <Box
        height="60px"
        width="60px"
        borderColor={colors.mainColor}
        br="50%"
        display="flex"
        items="center"
        justify="center"
        pointer
        onClick={() => setOpen(true)}
      >
        <Text
          fs="10px"
          color={colors.mainColor}
          hover
        >
          Add Club
        </Text>
      </Box>
    </Box>
  );
};
