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
import { IFavorite } from "../../model";

interface IProps {
  favoriteProduct: IFavorite;
  onViewDetail: (favoriteproduct: IFavorite) => void;
}
export const FavoriteProductListItem: React.FC<IProps> = ({
  favoriteProduct,
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
          src={favoriteProduct?.imageUrl}
          alt="favoriteproduct image"
          objectFit={"cover"}
          width={"10rem"}
          height={"8rem"}
          bg={"#3DB83A;"}
          onClick={() => onViewDetail(favoriteProduct)}
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
              {favoriteProduct?.productName}
            </Text>
            <Flex alignItems={"center"} marginBlock={"2rem"}>
              <IoLocationOutline />
              <Text fontSize={"sm"}>{favoriteProduct?.address}</Text>
            </Flex>
            <Link href={`/favoriteproduct/${favoriteProduct.id}`}>
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
              N{favoriteProduct?.price}
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
