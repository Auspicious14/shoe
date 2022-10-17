import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Form, Formik } from "formik";
import { ApTextInput } from "../../components";
import { supabase } from "../../utils/supabaseClient";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});
const defaultFields = {
  email: "",
  password: "",
};

export const SignInUser = () => {
  const [fields, setfields] = useState(defaultFields);
  const { email, password } = fields;

  const logInWithGoogle = async () => {};

  const handleSubmit = async (values: any) => {
    if (values.email === null) {
      alert("Email field is required");
      return;
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
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
            validationSchema={FormSchema}
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
