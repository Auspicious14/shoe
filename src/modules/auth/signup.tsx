import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ApTextInput } from "../../components/input/textInput";
import { supabase } from "../../utils/supabaseClient";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm Password is required"),
});
const defaultFields = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpPage = () => {
  const [fields, setfields] = useState(defaultFields);
  const { firstName, lastName, email, password, confirmPassword } = fields;

  const handleSubmit = async (values: any) => {
    console.log(values);
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          confirmPassword: values.confirmPassword,
        },
      },
    });
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  return (
    <>
      <Flex justifyContent={"space-between"}>
        <Box marginBlock={"4rem"} marginInline={"10rem"}>
          <Flex gap={".3rem"} fontSize={"1rem"} marginBottom={"1rem"}>
            <Text fontSize={"1rem"}>Have an account?</Text>
            <Link href="/signin" color={"#1778F2"}>
              Login
            </Link>
          </Flex>
          <Text fontSize={"2rem"} fontWeight={"bold"}>
            Welcome Back to ShoeRacks
          </Text>
          <Text color={"rgba(0, 0, 0, 0.67)"}>
            Sign up with your email or phone number
          </Text>
          <Formik
            initialValues={{
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            }}
            onSubmit={handleSubmit}
            validationSchema={FormSchema}
          >
            <Form>
              <ApTextInput label="First Name" name="firstName" type="text" />
              <ApTextInput label="Last Name" name="lastName" type="text" />
              <ApTextInput label="Email" name="email" type="email" />
              <ApTextInput label="Password" name="password" type="password" />
              <ApTextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
              />
              <Button
                type="submit"
                backgroundColor={"#1778F2"}
                width={"100%"}
                color={"white"}
                marginBlock={"1rem"}
                borderRadius={"2rem"}
              >
                Sign Up
              </Button>
            </Form>
          </Formik>

          <Text textAlign={"center"} fontSize=".9rem" fontWeight={"bold"}>
            By signing up, you've agreed to the T&C
          </Text>
          <Text textAlign={"center"} paddingBlock={"1.5rem"}>
            Or continue with
          </Text>
          <Flex justifyContent={"space-evenly"}>
            <Button
              leftIcon={<FcGoogle />}
              backgroundColor={"#F8F8F8"}
              border={"none"}
              paddingInline={"2rem"}
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
        <Image src="https://images.pexels.com/photos/2918534/pexels-photo-2918534.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
      </Flex>
    </>
  );
};
