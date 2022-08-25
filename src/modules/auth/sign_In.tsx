import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  createUser,
  signInWithGoogleEmailAndPassword,
  signInWithGooglePopup,
} from "../../firebase/firebase";
import { Form, Formik } from "formik";
import { ApTextInput } from "../../components";
import { useUserState } from "./context";
// import * as Yup from 'yup'

const defaultFields = {
  email: "",
  password: "",
};

// const FormSchema = Yup.object().shape
export const SignInUser = () => {
  const { setCurrentUser } = useUserState();
  const [fields, setfields] = useState(defaultFields);
  const { email, password } = fields;

  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUser(user);
    // console.log(user);
  };

  const handleSubmit = async (values: any) => {
    if (values.email === null) {
      alert("Email field is required");
      return;
    }

    try {
      const response = await signInWithGoogleEmailAndPassword(
        values.email,
        values.password
      );
      setCurrentUser(response?.user);
      // const docRef = await createUser(response?.user);
      console.log(response);
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("You entered the wrong password");
          break;
        case "auth/user-not-found":
          alert("Email not registered");
        case "auth/popup-closed-by-user":
          alert("Popup closed by you");
        default:
          console.log(error);
          break;
      }
    }
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

          <Formik
            initialValues={{
              email: email,
              password: password,
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <ApTextInput label="Email" name="email" type="email" />
              <ApTextInput label="Password" name="password" type="password" />
              <Button
                type="submit"
                backgroundColor={"#1778F2"}
                width={"100%"}
                color={"white"}
                marginBlock={"1rem"}
                borderRadius={"2rem"}
              >
                Sign In
              </Button>
              <Flex justifyContent={"space-between"}>
                <Checkbox>Keep me signed in</Checkbox>
                <Link color={"#1778F2"}>Forgot password</Link>
              </Flex>
            </Form>
          </Formik>

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
