import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";

export const Navigation = () => {
  return (
    <>
      <Box
        borderBottomWidth={".1rem"}
        borderBottomColor={"whitesmoke"}
        paddingBlock={"1rem"}
        background="white"
      >
        <Flex justifyContent={"space-around"} alignContent={"center"}>
          <Center color={"#1778F2"} fontWeight={"bold"} fontSize={"1.5rem"}>
            Shoeracks
          </Center>
          <Center>
            <InputGroup size={"md"} width={64}>
              <InputRightElement
                pointerEvents={"none"}
                children={<FiSearch color="text-blue-300" size={"20"} />}
              />
              <Input
                placeholder="What are you looking for"
                borderRadius={"20"}
              />
            </InputGroup>
          </Center>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={"500px"}
          >
            <GrFavorite size={30} />
            <AiOutlineMessage size={30} />
            <FiBell size={30} />
            <Button
              background={"bg-blue-500"}
              children={"post an advert"}
              backgroundColor={"#1778F2"}
              color={"white"}
              borderRadius={"100px"}
              border={"none"}
              padding={"2rem"}
            />
            <FiUser size={30} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
