import React from "react";
import { Box, Text, colors, Image } from "../common-components";
import { useLocation } from "react-router-dom";
import { useDoc } from "../Hooks";
import { Loading, UserCard } from "../components";

export const HomeWorkViewScreen = () => {
  const { pathname } = useLocation();
  const { data, loading } = useDoc(`posts${pathname.slice(14)}`);

  console.log(data);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
    >
      {loading ? (
        <Loading />
      ) : (
        <Box m="30px">
            <UserCard title={data.title} uid={data.uid} detailed/>
            <Box width='800px' height='500px' mt='20px'>
                <Image src={data.imgUrl}/>
            </Box>
            <Box mt='20px' width='800px'>
                <Text color={colors.textColor}>Дэлгэрэнгүй: {data.description}</Text>
            </Box>
        </Box>
      )}
    </Box>
  );
};
