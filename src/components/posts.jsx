import React from "react";
import { Box } from "../common-components";
import { HomeWorkCard } from "../components";
import { useCol, useDoc } from "../Hooks/firebase";

export const Posts = ({ data }) => {

  const GetData = (id) => {
    const { data } = useDoc("posts/" + id);
    return data;
  };

  return (
    <Box display={'flex'} wrap={'wrap'} justify={'center'} >
      {data.posts.map((postId) => {
        const postData = GetData(postId);
        return <HomeWorkCard {...postData} />;
      })}
    </Box>
  );
};
