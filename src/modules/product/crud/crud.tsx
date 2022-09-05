import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { ApTextInput, Navigation } from "../../../components";
import { useProductState } from "../context";
import { IProduct } from "../model";

interface IProps {
  product?: IProduct;
}
export const CreateAndUpdateProduct: React.FC<IProps> = ({ product }) => {
  const { writeData, products } = useProductState();
  return (
    <>
      <Navigation />
      <Box background={"whitesmoke"} paddingTop={"1rem"}>
        <Box
          background={"white"}
          padding={"3rem"}
          margin={"2rem"}
          marginInline={"5rem"}
          borderRadius={".4rem"}
        >
          <Flex justifyContent={"space-between"}>
            <Text fontWeight={"bold"} fontSize={"1.4rem"}>
              Post a new Product
            </Text>
            <Text>Cancel</Text>
          </Flex>
          <Box marginTop={"2rem"}>
            <Text fontWeight={"bold"}>Add Photos</Text>
            <Text>The first picture will be title picture</Text>
          </Box>
          <Formik
            initialValues={{
              name: product?.name || "",
              category: product?.category || "",
              condition: product?.category || "",
              price: product?.price || "",
              phoneNumber: product?.phoneNumber || "",
              description: product?.description || "",
              size: product?.size || "",
              color: product?.color || "",
              location: product?.location || "",
            }}
            onSubmit={(values) => writeData(values)}
          >
            {(props: FormikProps<any>) => (
              <Form>
                <ApTextInput type="file" name="file" />
                <Text>Add at least 1 pictures to it </Text>
                <Box marginTop={"2rem"}>
                  <Flex gap={"2rem"} justifyContent={"space-between"}>
                    <ApTextInput
                      name="category"
                      label="Category"
                      type="text"
                      placeHolder="Sneaker"
                    />
                    <ApTextInput
                      name="location"
                      label="Location"
                      type="text"
                      placeHolder="Kwara State"
                    />
                  </Flex>
                  <Flex gap={"2rem"} justifyContent={"space-between"}>
                    <ApTextInput
                      name="name"
                      label="Product Name"
                      type="text"
                      placeHolder="e.g Adidas NMD"
                    />
                    <ApTextInput
                      name="size"
                      label="Size"
                      type="text"
                      placeHolder="e.g 40"
                    />
                  </Flex>
                  <Flex gap={"2rem"} justifyContent={"space-between"}>
                    <ApTextInput
                      name="condition"
                      label="Condition"
                      type="text"
                      placeHolder="e.g New"
                    />
                    <ApTextInput
                      name="color"
                      label="Color"
                      type="text"
                      placeHolder="e.g Black"
                    />
                  </Flex>
                  <Flex gap={"2rem"} justifyContent={"space-between"}>
                    <ApTextInput
                      name="price"
                      label="Price"
                      type="number"
                      placeHolder="e.g N8,000"
                    />
                    <ApTextInput
                      name="phoneNumber"
                      label="Phone Number"
                      type="number"
                    />
                  </Flex>
                  <ApTextInput
                    type="textarea"
                    label="Description"
                    name="description"
                    placeHolder="Describe product..."
                  />

                  <Button
                    type="submit"
                    width={"100%"}
                    marginBlock={"1rem"}
                    backgroundColor={"#1778F2"}
                    color={"white"}
                    _hover={{ background: "#1778F2" }}
                  >
                    Post Product
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};
