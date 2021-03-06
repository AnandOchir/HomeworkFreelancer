import React from "react";
import { Box, Text, Image, colors, Button } from "../common-components";
import animationData from "./lotties/view-lottie.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import { UserCard } from "./user-card";
import { useDoc } from "../Hooks";

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
  const url = window.location.pathname
  const { deleteRecord, updateRecord, data } = useDoc('/users/'+uid)

  const deletePost = () => {
    deleteRecord('/posts/'+id)
    updateRecord({
      posts: data.posts.filter((e) => e != id)
    })
  }

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
            {
              description && description.length > 55 ?
                description.slice(0, 55) + '...'
              :
                description
            }
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
        {
          url == '/profile' &&
            <Button br={'5px'} borderColor={'red'} bcolor={'white'} pointer color={'red'} onClick={deletePost} >delete</Button>          
        }
        <Text fs="14px">{price}MNT</Text>
      </Box>
    </Box>
  );
};
