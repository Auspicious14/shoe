import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../model";

interface IProps {
  product: IProduct;
}
export const ProductListItem: React.FC<IProps> = ({ product }) => {
  return (
    <>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box width={"12rem"} height={"12rem"} bg={"red"}>
          <Image
            src={product?.imageUrl}
            alt="product image"
            objectFit={"cover"}
            width={"12rem"}
            height={"12rem"}
          />
        </Box>
        <Flex
          justifyContent={"space-between"}
          padding={".4rem"}
          paddingBlock={".8rem"}
          fontWeight={"bold"}
        >
          <Text>{product?.name}</Text>
          <Text>{product?.price}</Text>
        </Flex>
      </Box>
    </>
  );
};