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
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

const MotionModalContent = motion.custom(ModalContent);

const variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

const ColorSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSwitchFinish = () => {
    onClose();
  };

  const changeColorMode = () => {
    toggleColorMode();
    onOpen();
    setTimeout(onSwitchFinish, 1000);
  };

  return (
    <Box>
      <IconButton
        style={{ position: "fixed", top: "25px", right: "25px" }}
        aria-label="Mode"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        // colorScheme="twitter"
        backgroundColor={
          colorMode === "light"
            ? "rgba(0, 187, 204, 0.3)"
            : "rgba(155, 23, 94, 0.3)"
        }
        variant="solid"
        _focus={{ outline: 0 }}
        onClick={changeColorMode}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <MotionModalContent
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
          backgroundColor={colorMode === "light" ? "white" : "gray.800"}
          style={{ margin: 0, overflow: "hidden" }}
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

export default ColorSwitcher;
