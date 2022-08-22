import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { createUser, signInWithGooglePopup } from "../../firebase/firebase";

export const SignInUser = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUser(user);
    console.log(user);
  };

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Box marginBlock={"8rem"} marginInline={"10rem"}>
          <Flex gap={".3rem"} fontSize={"1rem"} marginBottom={"2rem"}>
            <Text fontSize={"1rem"}>Don't have an account?</Text>
            <Link href="/signup" color={"#1778F2"}>
              SignUp
            </Link>
          </Flex>
          <Text fontSize={"2rem"} fontWeight={"bold"}>
            Welcome Back to ShoeRacks
          </Text>
          <Text color={"rgba(0, 0, 0, 0.67)"}>
            Sign in with your email or phone number
          </Text>
          <FormControl>
            <FormLabel marginTop={"1rem"}>Email or phone</FormLabel>
            <Input
              type={"text"}
              marginBottom={".5rem"}
              paddingBlock={"1.5rem"}
            ></Input>
            <FormLabel>Password</FormLabel>
            <Input
              type={"password"}
              marginBottom={".5rem"}
              paddingBlock={"1.5rem"}
            ></Input>
            <Flex justifyContent={"space-between"}>
              <Checkbox>Keep me signed in</Checkbox>
              <Link color={"#1778F2"}>Forgot password</Link>
            </Flex>
            <Button
              width={"100%"}
              backgroundColor={"#1778F2"}
              color={"white"}
              marginTop={"1.5rem"}
              border={"none"}
              borderRadius={"3rem"}
            >
              Sign In
            </Button>
          </FormControl>
          <Text textAlign={"center"} paddingBlock={"1.5rem"}>
            Or continue with
          </Text>
          <Flex justifyContent={"space-evenly"}>
            <Button
              leftIcon={<FcGoogle />}
              backgroundColor={"#F8F8F8"}
              border={"none"}
              paddingInline={"2rem"}
              onClick={logInWithGoogle}
            >
              Google
            </Button>
            <Button
              leftIcon={<BsFacebook color="#1877F2" />}
              backgroundColor={"#F8F8F8"}
              border={"none"}
              paddingInline={"2rem"}
            >
              Facebook
            </Button>
          </Flex>
        </Box>
        <Image src="https://images.pexels.com/photos/3261069/pexels-photo-3261069.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
      </Flex>
    </>
  );
};
