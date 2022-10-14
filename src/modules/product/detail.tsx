import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Navigation } from "../../components";
import { IProduct } from "./model";

interface IProps {
  product: IProduct;
}
export const ProductDetail: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Navigation />
      <Flex gap={"2rem"} margin={"2rem"} marginInline={"4rem"}>
        <Box
          bg={"rgba(0,0,0,0.1)"}
          padding={"1.5rem"}
          width={"38rem"}
          height={"100vh"}
        >
          <Flex gap={"2rem"}>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"25rem"}
              height={"8rem"}
            ></Image>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"25rem"}
              height={"8rem"}
            ></Image>
          </Flex>
          <Image
            src="https://media.istockphoto.com/photos/white-leather-sneakers-isolated-on-white-background-picture-id1402459490?k=20&m=1402459490&s=612x612&w=0&h=9u66XyLELQxzinCrKSO3R3wFX7fzZWOsllqgXv2nL-w="
            width={"38rem"}
            height={"18rem"}
            marginBlock={"1.5rem"}
          ></Image>
          <Flex gap={"2rem"}>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"25rem"}
              height={"8rem"}
            ></Image>
            <Image
              src="https://media.istockphoto.com/photos/female-white-sneakers-isolated-on-white-picture-id672589500?k=20&m=672589500&s=612x612&w=0&h=iLRCLS9ZxKWKyWbCmOnAWXQEaUn6SkYPrp8Fxj_cEnA="
              width={"25rem"}
              height={"8rem"}
            ></Image>
          </Flex>
        </Box>
        <Stack width={"50%"}>
          <Box height={"100%"} my={"1rem"}>
            <Text>Product Name</Text>
            <Text fontWeight={"bold"}>{product?.name}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Price</Text>
            <Text fontWeight={"bold"}>{product?.price}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Category</Text>
            <Text fontWeight={"bold"}>{product?.category}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Condition</Text>
            <Text fontWeight={"bold"}>{product?.condition}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Color</Text>
            <Text fontWeight={"bold"}>{product?.color}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Address</Text>
            <Text fontWeight={"bold"}>{product?.address}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Size</Text>
            <Text fontWeight={"bold"}>{product?.size}</Text>
          </Box>
          <Box height={"100%"} my={"1rem"}>
            <Text>Description</Text>
            <Text fontWeight={"bold"}>{product?.description}</Text>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
