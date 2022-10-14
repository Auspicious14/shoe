import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface IProps {
  children: React.ReactNode;
  className?: {};
}
export const ApSideBar: React.FC<IProps> = ({ children, className }) => {
  return (
    <>
      <Box background="#F8F8F8" style={className} width={"100%"}>
        {/* <Flex justifyContent={"space-around"} padding={"1rem"}> */}
        {children}
        {/* </Flex> */}
      </Box>
    </>
  );
};
