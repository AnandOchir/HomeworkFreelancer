import React from "react";
import { Box, Text, Image, colors } from "../common-components";
import { useDoc } from "../Hooks";

export const UserCard = ({ uid, title, detailed }) => {
  const { data } = useDoc(`users/${uid}`);
  const size = { width: detailed ? '55px' : '30px', font: detailed ? '16px' : '12px'}

  return (
    <Box display="flex" width="100%" direction="row">
      <Image
        width={size.width}
        height={size.width}
        br='50%'
        src={data && data.profileImg}
      />
      <Box ml="10px">
        <Text color={colors.textColor} fs={size.font}>
          {data && data.username}
        </Text>
        <Text color={colors.textSoftColor} fs={size.font}>
          {title}
        </Text>
        {detailed && <Text color={colors.textSoftColor} fs={size.font}>{data && data.phonenumber}</Text>}
      </Box>
    </Box>
  );
};
