import { Avatar } from "@chakra-ui/react";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Avatar.Root colorPalette="gray" size="xs">
      <Avatar.Fallback />
      <Avatar.Image src="https://bit.ly/broken-link" />
    </Avatar.Root>
  );
};

export default Profile;
