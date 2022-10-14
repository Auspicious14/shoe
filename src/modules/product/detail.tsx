import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { IProduct } from "./model";

interface IProps {
  product: IProduct;
}
export const ProductDetail: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Flex gap={"2rem"} margin={"2rem"}>
        <Box bg={"blue"} width={"40rem"} height={"100vh"}>
          <Flex justifyContent={"space-evenly"} gap={"3rem"}>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"15rem"}
              height={"8rem"}
            ></Image>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"15rem"}
            ></Image>
          </Flex>
          <Image
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={"20rem"}
          ></Image>
          <Flex justifyContent={"space-evenly"} gap={"3rem"}>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"15rem"}
            ></Image>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"15rem"}
            ></Image>
          </Flex>
        </Box>
        <Stack width={"50%"}>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Product Name</Text>
            <Text>{product?.name}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Price</Text>
            <Text>{product?.price}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Category</Text>
            <Text>{product?.category}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Condition</Text>
            <Text>{product?.condition}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Color</Text>
            <Text>{product?.color}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Address</Text>
            <Text>{product?.address}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Size</Text>
            <Text>{product?.size}</Text>
          </Box>
          <Box bg={"red"} height={"100%"} my={"1rem"}>
            <Text>Description</Text>
            <Text>{product?.description}</Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
