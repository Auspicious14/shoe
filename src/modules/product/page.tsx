import {
  Box,
  Flex,
  Grid,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FcDeleteDatabase } from "react-icons/fc";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineMailOutline, MdPassword } from "react-icons/md";
import { TbBrandProducthunt } from "react-icons/tb";
import { ApSideBar, Navigation } from "../../components";
import { ProductListItem } from "./components/listitem";
import { useProductState } from "./context";
import { IProduct } from "./model";

export const ProductPage = () => {
  // const [products, setProducts] = useState<IProduct[]>([]);
  const { fetchProduct, products } = useProductState();

  useEffect(() => {
    fetchProduct();
  }, []);
  const handleViewDetail = () => {};
  return (
    <>
      <Navigation />
      <Box background={"whitesmoke"} paddingTop={"1rem"}>
        <ApSideBar>
          <Box
            borderRadius={".3rem"}
            paddingBlock={"2rem"}
            background={"white"}
            width={"20rem"}
            height={"100%"}
            position={"fixed"}
            left={"4rem"}
            zIndex={"1"}
            // marginTop={"1rem"}
            overflow-x="hidden"
          >
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
        </ApSideBar>
        <Box
          borderRadius={".3rem"}
          padding={"2rem"}
          background={"white"}
          width={"55rem"}
          marginLeft={"27rem"}
        >
          <Flex gap={"3rem"} alignItems={"center"}>
            <Box width={"8rem"} height={"8rem"} borderRadius={"50%"}>
              <Image
                src="https://i.ibb.co/ypkgK0X/blue-beanie.png"
                alt="profile pic"
                objectFit={"cover"}
                borderRadius={"50%"}
                width={"8rem"}
                height={"8rem"}
              />
            </Box>
            <Box>
              <Text fontWeight={"bold"} paddingBlock={".5rem"}>
                Salahudeen Ahmad
              </Text>
              <Text size={"sm"}>09158811871</Text>
              <Text size={"sm"} paddingBlock={".5rem"}>
                I sell nice sneakers at affordable prices
              </Text>
            </Box>
          </Flex>
          <Text paddingBlock={"2rem"}>Products Available</Text>
          <Grid templateColumns={"repeat(3, 1fr)"} gap={"1rem"}>
            {products?.map((item, id) => (
              <ProductListItem
                product={item}
                key={id}
                onViewDetail={handleViewDetail}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
