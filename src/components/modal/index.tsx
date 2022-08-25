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
        // <div className="border shadow-sm  p-4 bg-cyan-600 m-auto">
        //   <h1>{title}</h1>
        //   <IoCloseOutline
        //     size={"20"}
        //     className="absolute top-2 right-2"
        //     onClick={onDismiss}
        //   />
        //   <div className={className}>{children}</div>
        // </div>

        <Container
          bg={"#FFFFFF"}
          color={"1778F2"}
          textAlign={"center"}
          width={"20rem"}
          height={"15rem"}
          borderRadius={".3rem"}
          boxShadow={"2px solid gray"}
          shadow="md"
          borderWidth="1px"
          padding={"1rem"}
        >
          <IoCloseOutline
            size={"30"}
            onClick={onDismiss}
            style={{
              position: "relative",
              top: "-1",
              right: "-260",
            }}
          />
          <Box
            width={"4rem"}
            height={"4rem"}
            borderRadius={"100%"}
            background={"#d9d9d9"}
            margin={"auto"}
          ></Box>

          <Text fontWeight={"bold"} fontSize={"1.2rem"} marginBottom={".3rem"}>
            {title}
          </Text>
          <Box>{children}</Box>
        </Container>
        // <Modal isOpen={isOpen} onClose={onClose}>
        //   <ModalContent>
        //     <ModalOverlay />
        //     <ModalCloseButton />
        //     <ModalHeader>{title}</ModalHeader>
        //     <ModalBody>{children}</ModalBody>
        //   </ModalContent>
        // </Modal>
      )}
    </>
  );
};
