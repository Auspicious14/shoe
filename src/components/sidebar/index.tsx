import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
}
export const ApSideBar: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Box background="#F8F8F8">
        {/* <Flex justifyContent={"space-around"} padding={"1rem"}> */}
        {children}
        {/* </Flex> */}
      </Box>
    </>
  );
};
