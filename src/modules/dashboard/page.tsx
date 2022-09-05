import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AboutUs, Navigation } from "../../components";
import { Boot, Canvas, Casuals } from "./components/category";

export const DashboardPage = () => {
  const [category, setCategory] = useState("boots");
  const handleShowCategory = (path: string) => {
    setCategory(path);
  };

  return (
    <Box background="#F8F8F8">
      <Navigation />
      <Box
        // backgroundColor={"#00050026"}
        borderColor={"#0050026"}
        paddingBlock={"1rem"}
        paddingInline={"1rem"}
      >
        <Flex justifyContent={"space-evenly"} gap={"1rem"} fontWeight={"bold"}>
          <Center>Boot</Center>
          <Center>Casual</Center>
          <Center>Canvas</Center>
          <Center>Flip Flop</Center>
          <Center>High Heel</Center>
          <Center>Palms</Center>
          <Center>Sandal</Center>
          <Center>Shoe</Center>
          <Center>Slide</Center>
          <Center>Sneaker</Center>
        </Flex>
      </Box>
      <Box marginBlock={"4rem"} fontWeight={"bold"}>
        <Center>WELCOME TO SHOERACKS</Center>
        <Center fontSize={"4rem"}>Got Some Nice Shoes to Sell?</Center>
        <Center
          backgroundColor={"black"}
          width={"15rem"}
          margin={"auto"}
          color={"white"}
          fontSize={"3rem"}
        >
          Free Ads
        </Center>
        <Center>
          <Button
            // children={"Post an advert"}
            backgroundColor={"#1778F2"}
            color={"white"}
            borderRadius={"100px"}
            border={"none"}
            padding={"1rem"}
            paddingInline={"1.5rem"}
            marginBlock={"1rem"}
          >
            {"Post an Advert"}
          </Button>
        </Center>
      </Box>
      <Stack isInline spacing={"5px"} justifyContent={"center"}>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"300px"}
            width={"100%"}
            fallbackSrc="https://via.placeholder.com/150"
            borderRadius={".5rem"}
            marginBottom={".5rem"}
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"200px"}
            width={"100%"}
            fallbackSrc="https://via.placeholder.com/150"
            borderRadius={".5rem"}
            marginBottom={".5rem"}
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1623684225794-a8f1f5037f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"300px"}
            fallbackSrc="https://via.placeholder.com/150"
            borderRadius={".5rem"}
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1628558422453-576457df4b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            borderRadius={".5rem"}
            height={"500px"}
            marginBottom={".5rem"}
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1628558422453-576457df4b0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            borderRadius={".5rem"}
            height={"500px"}
            marginBottom={".5rem"}
            alt=""
          />
        </Box>
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"300px"}
            borderRadius={".5rem"}
            marginBottom={".5rem"}
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"200px"}
            width={"100%"}
            borderRadius={".5rem"}
            marginBottom={".5rem"}
            alt=""
          />
          <Image
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            objectFit={"cover"}
            height={"300px"}
            borderRadius={".5rem"}
            alt=""
          />
        </Box>
      </Stack>
      <Box marginInline={"4rem"} marginTop={"3rem"}>
        <Heading>How Does It Work</Heading>
        <Text color=" #1778F2">Follow these simple steps to get started</Text>
        <Flex justifyContent={"space-evenly"} gap={"1rem"} marginBlock={"1rem"}>
          <Box>
            <Text fontWeight={"bold"}>Post Your Ads</Text>
            <Text>
              Posting ads on your website can be a lucrative way to monetize
              your website when you do it correctly
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Get Potential Customer</Text>
            <Text>
              Posting ads on your website can be a lucrative way to monetize
              your website when you do it correctly
            </Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"}>Sell Your Product</Text>
            <Text>
              Posting ads on your website can be a lucrative way to monetize
              your website when you do it correctly
            </Text>
          </Box>
        </Flex>

        <Heading>Explore Categories</Heading>
        <Flex
          justifyContent={"space-evenly"}
          fontWeight={"bold"}
          gap={"2rem"}
          marginBlock={"1rem"}
        >
          <Button
            background={"none"}
            onClick={() => handleShowCategory("boots")}
            isActive={true}
          >
            Boot
          </Button>
          <Button
            background={"none"}
            onClick={() => handleShowCategory("casuals")}
          >
            Casual
          </Button>
          <Button
            background={"none"}
            onClick={() => handleShowCategory("canvas")}
          >
            Canvas
          </Button>
          <Button background={"none"}>Flip Flop</Button>
          <Button background={"none"}>High Heel</Button>
          <Button background={"none"}>Palms</Button>
          <Button background={"none"}>Sandal</Button>
          <Button background={"none"}>Shoe</Button>
          <Button background={"none"}>Slide</Button>
          <Button background={"none"}>Sneaker</Button>
        </Flex>
        {category === "boots" && <Boot />}
        {category === "casuals" && <Casuals />}
        {category === "canvas" && <Canvas />}
      </Box>
      <AboutUs />
      <Box bg={"white"} padding="4rem">
        <Flex justifyContent={"space-around"} gap={"2rem"}>
          <Text color={"#1778F2"} fontWeight={"bold"} fontSize={"1.5rem"}>
            Shoeracks
          </Text>
          <List spacing={".5rem"}>
            <ListItem>
              <Link>Contact Us</Link>
            </ListItem>
            <ListItem>
              <Link>FAQ</Link>
            </ListItem>
            <ListItem>
              <Link>About Us</Link>
            </ListItem>
          </List>
          <List spacing={".5rem"}>
            <ListItem>
              <Link>Privacy Policy</Link>
            </ListItem>
            <ListItem>
              <Link>Terms and Conditions</Link>
            </ListItem>
            <ListItem>
              <Link>Support</Link>
            </ListItem>
            <ListItem>
              <Link>Safety tips</Link>
            </ListItem>
          </List>
          <List>
            <Text textAlign={"center"} fontWeight={"bold"}>
              Follow us
            </Text>
            <Flex gap={"1rem"}>
              <FiTwitter size={20} />
              <FiFacebook size={20} />
              <FiInstagram size={20} />
              <AiOutlineWhatsApp size={20} />
            </Flex>
          </List>
        </Flex>
        <Box
          height={"2px"}
          border={"1px solid rgba(0, 0, 0, 0.1)"}
          marginBlock={"1.5rem"}
          marginLeft={"10rem"}
        ></Box>
        <Flex justifyContent={"space-between"} marginLeft={"5rem"}>
          <Text>Copyright@2022 ShoeRacks</Text>
          <Text>All right reserved | Terms and Conditions | Policy</Text>
        </Flex>
      </Box>
    </Box>
  );
};
