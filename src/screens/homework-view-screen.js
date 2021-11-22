import React from "react";
import { Box, Text, colors, Image, Button } from "../common-components";
import { useLocation } from "react-router-dom";
import { useDoc } from "../Hooks";
import { Loading, UserCard } from "../components";

export const HomeWorkViewScreen = () => {
  const { pathname } = useLocation();
  const { data, updateRecord, loading } = useDoc(`posts${pathname.slice(14)}`);

  const Accept = () =>{
    updateRecord({
      status: 'ongoing'
    }).then(() => {
      console.log('success')
    }).catch((err) => {
      console.log(err)
    })
  }

  console.log(data);

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justify="center"
    >
      {loading ? (
        <Loading />
      ) : (
        <Box m="30px">
            <UserCard title={data.title} uid={data.uid} detailed/>
            <Box width='800px' height='500px' mt='20px'>
                <Image src={data.imgUrl}/>
            </Box>
            <Box mt='20px' width='800px' display="flex" height="40px" items="center" justify="space-between">
                <Text color={colors.textColor}>Дэлгэрэнгүй: {data.description}</Text>
                <Button p={'5px'} width={'200px'} height={'40px'} fs={'17px'} fw={'bold'} bcolor={colors.mainColor} br={'5px'} borderColor={colors.mainColor} onClick={Accept}>ACCEPT</Button>
            </Box>
        </Box>
      )}
    </Box>
  );
};
