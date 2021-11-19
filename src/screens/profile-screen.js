import React, { useContext } from "react";
import { Box, Text } from "../common-components";
import { Posts } from "../components/posts";
import { useDoc } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";

export const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const { data } = useDoc("users/" + uid);


  if (!(data && data.id != 'null')) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Box p={"20px"}>
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

        <Text textAlign={'center'}  fs={'40px'} >Your Posts</Text>
        
        <Posts data={data} />
    </Box>
  );
};
