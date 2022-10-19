import { Button, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useProfiletate } from "./context";
import { IProfile } from "./model";

export const ProfilePage = () => {
  const { fetchProfile, updateProfile } = useProfiletate();
  useEffect(() => {
    fetchProfile();
    updateProfile();
  }, []);

  return (
    <>
      <Text>Profileeeeee</Text>
      <Button onClick={updateProfile}>Hello</Button>
    </>
  );
};
