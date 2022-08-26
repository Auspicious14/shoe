import {
  Box,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useUserState } from "../../modules/auth/context";

interface IProps {
  show: boolean;
  className?: string;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
}
export const ApModal: React.FC<IProps> = ({
  show,
  title,
  className,
  children,
  onDismiss,
}) => {
  return (
    <>
      {show && (
        <Box
          background={"#403c3c75"}
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          top={0}
          left={0}
          bottom={0}
        >
          <Container
            bg={"#FFFFFF"}
            color={"1778F2"}
            textAlign={"center"}
            width={"22rem"}
            height={"18rem"}
            borderRadius={".3rem"}
            boxShadow={"2px solid gray"}
            shadow="md"
            borderWidth="1px"
            padding={"1rem"}
            position={"fixed"}
            left={"35%"}
            top={"30%"}
            zIndex={3}
          >
            <IoCloseOutline
              size={"30"}
              onClick={onDismiss}
              style={{
                position: "absolute",
                top: "2",
                right: "2",
              }}
            />
            <Box
              width={"4rem"}
              height={"4rem"}
              borderRadius={"100%"}
              background={"#d9d9d9"}
              margin={"auto"}
            ></Box>

            <Text
              fontWeight={"bold"}
              fontSize={"1.2rem"}
              marginBottom={".3rem"}
            >
              {title}
            </Text>
            <Box>{children}</Box>
          </Container>
        </Box>
      )}
    </>
  );
};
