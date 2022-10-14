import { Box, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { IProduct } from "../model";

interface IProps {
  product: IProduct;
  onViewDetail: (product: IProduct) => void;
}
export const ProductListItem: React.FC<IProps> = ({
  product,
  onViewDetail,
}) => {
  return (
    <>
      <Link href={`/product/${product.id}`}>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image
            src={product?.imageUrl}
            alt="product image"
            objectFit={"cover"}
            width={"8rem"}
            height={"8rem"}
            onClick={() => onViewDetail(product)}
          />
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
      </Link>
    </>
  );
};
