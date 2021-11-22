import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "../common-components";
import { Loading } from "../components";
import { Posts } from "../components/posts";
import { useDoc, useFirebase } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";

export const ProfileScreen = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const { auth } = useFirebase()
  const { data } = useDoc("users/" + uid);

  if (!(data && data.id != 'null')) {
    return (
      <Loading />
    );
  }

  if(!uid) {
    navigate('/sign-in')
  }

  return (
    <Box p={"20px"}>
      <Box display={'flex'} direction={'row'} items={'center'} justify={'space-between'}  >
        <Box
          display={"flex"}
          alignItems={"center"}
        >
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundImage: `url("${data.profileImg}")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "50%",
            }}
          />
          <Box
            display={"flex"}
            direction={"column"}
            justify={"space-around"}
            ml={"30px"}
          >
            <div>
              <Text opacity={"0.5"}>Username: </Text>
              <Text fs={"20px"}>{data.username}</Text>
            </div>
            <div>
              <Text opacity={"0.5"}>Email: </Text>
              <Text fs={"20px"}>{data.email}</Text>
            </div>
            <div>
              <Text opacity={"0.5"}>Phone number: </Text>
              <Text fs={"20px"}>{data.phonenumber}</Text>
            </div>
          </Box>
        </Box>
        <Box br={'5px'} borderColor={'red'} p={'5px'} onClick={() => auth.signOut()}>
          <Text color={'red'} fw={'600'} fs={'15px'} >Log Out</Text>
        </Box>
      </Box>

        <Text textAlign={'center'}  fs={'40px'} >Your Posts</Text>
        {
          data.posts.length > 0 ?
            <Posts data={data} />
            :
            <Text mt={'40px'} textAlign={'center'} fs={'30px'} >You have no post</Text>
        }
    </Box>
  );
};
