import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Navigation } from "../../components";
import { ApTextInput } from "../../components/input/textInput";

export const StoreDetail = () => {
  return (
    <>
      <Navigation />
      <Box padding={"3rem"} background={"white"}>
        <Flex justifyContent={"space-between"}>
          <Text>Product Details</Text>
          <Button>Product Details</Button>
        </Flex>
        <Formik
          initialValues={{ name: "", phoneNumber: "" }}
          onSubmit={() => {}}
        >
          <Form>
            <Grid>
              <ApTextInput name="" label="Product Name" type="text" />
              <ApTextInput name="" label="Size" type="number" />
              <ApTextInput name="" label="Condition" type="text" />
              <ApTextInput name="" label="Color" type="text" />
              <ApTextInput name="" label="Price" type="number" />
              <ApTextInput name="" label="Phone Number" type="text" />
            </Grid>
            <ApTextInput
              name=""
              placeHolder="Enter description"
              type="textarea"
            />
            <Button>Submit</Button>
          </Form>
        </Formik>
      </Box>
    </>
  );
};
