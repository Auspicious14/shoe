import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FiSearch, FiBell, FiUser } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import { AiOutlineMessage } from "react-icons/ai";
import { ApModal } from "../modal";
import { createUser, signOutUser } from "../../firebase/firebase";

export const Navigation = () => {
  const [display, setDisplay] = useState<{ show: boolean; data?: any }>({
    show: false,
  });

  const handleLogOut = async () => {
    const response = await signOutUser();
    await createUser(response);
    console.log(response);
  };
  return (
    <>
      <Box
        borderBottomWidth={".1rem"}
        borderBottomColor={"whitesmoke"}
        paddingBlock={"1rem"}
        background="white"
        position={"sticky"}
        top={"0"}
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
            <FiUser
              size={30}
              onClick={() => {
                setDisplay({ show: true });
              }}
            />
          </Box>
        </Flex>
      </Box>

      <ApModal
        title="Log Out"
        show={display.show}
        className="flex justify-between"
        onDismiss={() => {
          setDisplay({ show: false });
          console.log("clicked");
        }}
      >
        <Text color={"rgba(0, 0, 0, 0.67)"} fontSize={".9rem"}>
          Are you sure to log out?
        </Text>
        <Flex
          justifyContent={"space-between"}
          textAlign={"center"}
          marginBlock={"1.5rem"}
        >
          <Button borderRadius={"3rem"} paddingInline={"3rem"}>
            Cancel
          </Button>
          <Button
            backgroundColor={"#1778F2"}
            color={"white"}
            borderRadius={"3rem"}
            paddingInline={"3rem"}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Flex>
      </ApModal>
    </>
  );
};
