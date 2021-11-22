import React from "react";
import { Box, Text, Image, colors } from "../common-components";
import animationData from "./lotties/view-lottie.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "./user-card";

export const HomeWorkCard = ({
  imgUrl,
  price,
  description,
  uid,
  title,
  tags,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <Box
      width="300px"
      min_height="320px"
      br="10px"
      m="20px"
      borderColor={colors.borderColor}
      overflow="hidden"
    >
      <Image src={imgUrl} height="200px" />
      <Box
        m="10px"
        display="flex"
        direction="column"
        justify="space-between"
        height="60px"
      >
        <Box display="flex" width="100%" direction="row">
          <UserCard uid={uid} title={title}/>
          <Box>
            {tags && tags.map((tag) => (
              <Text color={colors.textSoftColor} fs="10px">
                {tag}
              </Text>
            ))}
          </Box>
        </Box>
        <Box min_height="20px">
          <Text color={colors.textColor} fs="14px">
            {description}
          </Text>
        </Box>
      </Box>
      <Box height="1px" width="100%" background={colors.borderColor} />
      <Box
        m="10px"
        display="flex"
        direction="row"
        items="center"
        justify="space-between"
      >
        <Box
          width="60px"
          display="flex"
          direction="row"
          items="center"
          height="30px"
          pointer
          onClick={() => navigate(id)}
        >
          <Lottie animationData={animationData} />
          <Text fs="10px" color={colors.textColor}>
            View
          </Text>
        </Box>
        <Text fs="14px">{price}MNT</Text>
      </Box>
    </Box>
  );
};
