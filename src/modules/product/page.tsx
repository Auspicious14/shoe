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
      <Flex
        background={"blue"}
        padding={"2rem"}
        paddingInline={"4rem"}
        width={"100%"}
      >
        <ApSideBar>
          <Box
            borderRadius={".3rem"}
            paddingBlock={"2rem"}
            // background={"green"}
            // width={"50%"}
          >
            <Box textAlign={"center"}>
              <Box
                width={"8rem"}
                height={"8rem"}
                borderRadius={"50%"}
                margin={"auto"}
              >
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
              </Box>
            </Box>
          </Box>
        </ApSideBar>
        <Box
          borderRadius={".3rem"}
          padding={"2rem"}
          background={"white"}
          width={"50%"}
          marginLeft={"27rem"}
        >
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
      </Flex>
    </>
  );
};
