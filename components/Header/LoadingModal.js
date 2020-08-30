import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

const MotionModalContent = motion.custom(ModalContent);

const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

const LoadingModal = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const changeColorMode = () => {
    toggleColorMode();
    onOpen();
    setTimeout(onClose, 1000);
  };

  return (
    <Box
      width="50px"
      style={{ position: "absolute", top: "25px", right: "25px" }}
    >
      <IconButton
        aria-label="Mode"
        icon="moon"
        variant={colorMode === "light" ? "solid" : "ghost"}
        color={colorMode === "light" ? "gray.800" : "white"}
        _focus={{ outline: 0 }}
        onClick={changeColorMode}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <MotionModalContent
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2 }}
          backgroundColor={colorMode === "light" ? "white" : "gray.800"}
        >
          <ModalBody>
            <Flex height="100vh" justify="center" align="center">
              <ClipLoader
                size="50px"
                color={colorMode === "light" ? "gray.800" : "white"}
                loading={isOpen}
              />
            </Flex>
          </ModalBody>
        </MotionModalContent>
      </Modal>
    </Box>
  );
};

export default LoadingModal;
