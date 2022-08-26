import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdOutlineMailOutline, MdPassword } from "react-icons/md";
import { Navigation } from "../../components";
import { FiLogOut } from "react-icons/fi";
import { FcDeleteDatabase } from "react-icons/fc";
import { BiArrowBack } from "react-icons/bi";

export const ProductPage = () => {
  return (
    <>
      <Navigation />
      <Box background="#F8F8F8">
        <Flex justifyContent={"space-around"} padding={"1rem"}>
          <Box
            borderRadius={".3rem"}
            paddingBlock={"2rem"}
            background={"white"}
            width={"20rem"}
          >
            <Text textAlign={"center"}></Text>
            <List>
              <ListItem fontWeight={"bold"} padding={".7rem"}>
                <ListIcon as={BiArrowBack} fontSize={"1.3rem"} />
                Product Page
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={FaRegUser}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Personal Details
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={TbBrandProducthunt}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Products
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={BsTelephone}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Change Phone Number
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={MdOutlineMailOutline}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Change Email
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={MdPassword}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Change Password
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={FcDeleteDatabase}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Delete Account
              </ListItem>
              <ListItem
                borderBottom={"1px solid gray"}
                fontWeight={"bold"}
                padding={".7rem"}
              >
                <Box
                  width={"2.5rem"}
                  height={"2.5rem"}
                  borderRadius={"4rem"}
                  background={"rgba(23, 120, 242, 0.1)"}
                  textAlign={"center"}
                  display={"inline-block"}
                  marginRight={"1rem"}
                >
                  <ListIcon
                    as={FiLogOut}
                    fontSize={"1.3rem"}
                    color={"#1778F2"}
                    margin={"auto"}
                    marginTop={".5rem"}
                  />
                </Box>
                Log Out
              </ListItem>
            </List>
          </Box>
          <Box
            borderRadius={".3rem"}
            paddingBlock={"2rem"}
            background={"white"}
            width={"50rem"}
          ></Box>
        </Flex>
      </Box>
    </>
  );
};
