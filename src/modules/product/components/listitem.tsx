import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
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
      <Flex
        // borderWidth="1px"
        gap={"2rem"}
        // borderRadius="lg"
        overflow="hidden"
        justifyContent={"center"}
        alignItems={"center"}
        // marginInline={"1rem"}
      >
        <Image
          src={product?.imageUrl}
          alt="product image"
          objectFit={"cover"}
          width={"10rem"}
          height={"8rem"}
          bg={"#3DB83A;"}
          onClick={() => onViewDetail(product)}
        />
        <Box
          width={"4.5rem"}
          height={"1.7rem"}
          borderRadius={"4rem"}
          // textAlign={"center"}
          // marginInline={"auto"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"white"}
          position={"relative"}
          top={"-2rem"}
          left={"-5.4rem"}
        >
          <BsHeart
            size={"20"}
            // style={{
            //   position: "relative",
            //   top: "-2rem",
            //   left: "-6.5rem",
            //   zIndex: "20",
            // }}
          />
        </Box>
        <Flex
          justifyContent={"space-between"}
          padding={".4rem"}
          paddingBlock={".8rem"}
          fontWeight={"bold"}
          alignItems={"center"}
          gap={"4rem"}
        >
          <Box>
            <Text fontWeight={"bold"} marginBlock={"2rem"}>
              {product?.name}
            </Text>
            <Flex alignItems={"center"} marginBlock={"2rem"}>
              <IoLocationOutline />
              <Text fontSize={"sm"}>{product?.address}</Text>
            </Flex>
            <Link href={`/product/${product.id}`}>
              <Button
                bg={"#ECF9EC"}
                borderRadius={"12px"}
                width={"8rem"}
                height={"3rem"}
                color={"#3DB83A"}
                variant={"solid"}
                textDecoration={"none"}
                fontSize={"sm"}
              >
                View Details
              </Button>
            </Link>
          </Box>
          <Box>
            <Text fontWeight={"bold"} marginBlock={"2rem"}>
              N{product?.price}
            </Text>
            <Text marginBlock={"2rem"} fontSize={"sm"}>
              {product?.category}
            </Text>
            <Button
              bg={"#ECF9EC"}
              borderRadius={"12px"}
              width={"8rem"}
              height={"3rem"}
              color={"#3DB83A;"}
            >
              Chat Seller
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
