import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const AboutUs = () => {
  return (
    <Box marginBlock={"4rem"}>
      <Flex>
        <Box
          marginLeft={"18rem"}
          marginTop={"4rem"}
          position={"relative"}
          left={"8rem"}
        >
          <Heading marginBottom={".6rem"}>About US</Heading>

          <Container bg={"white"} padding={"1rem"} paddingInline={["2rem"]}>
            SneaKart helps people to buy and sell Sneakers with ease and also
            enable Online vendors and Potential customers to interacte well.
          </Container>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1590422570254-62367e28e69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGZvb3R3ZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          objectFit={"contain"}
          height={"400px"}
          width={"100%"}
          borderRadius={".2rem"}
        />
      </Flex>
    </Box>
  );
};

("https://www.shutterstock.com/image-photo/happy-woman-rests-pushes-her-shoes-1750425800");
("https://cdn.pixabay.com/photo/2017/08/25/10/37/sneakers-2679705__340.jpg");
