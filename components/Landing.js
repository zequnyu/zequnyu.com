import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  useColorMode,
} from "@chakra-ui/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Landing = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height="80vh"
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        paddingTop="150px"
        direction={{ base: "column-reverse", md: "row" }}
        justify="space-between"
      >
        <Flex
          width={{ base: "100%", md: "50%" }}
          justify={{ base: "center", md: "flex-end" }}
        >
          <Flex
            width="250px"
            direction="column"
            justify="center"
            textAlign={{ base: "center", md: "left" }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              color={colorMode === "light" ? "gray.800" : "white"}
            >
              Zequn Yu
            </Text>
            <Text color={colorMode === "light" ? "gray.500" : "gray.400"}>
              MSc Computer Science @ University of Southern California
            </Text>
            <Flex
              marginTop="5px"
              marginLeft={{ md: "-5px" }}
              justify={{ base: "center", md: "flex-start" }}
            >
              <IconButton
                aria-label="LinkedIn"
                icon={FaLinkedin}
                variant="ghost"
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/zequnyu/"
              />
              <IconButton
                aria-label="Github"
                icon={FaGithub}
                variant="ghost"
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://github.com/zequnyu"
              />
              <IconButton
                aria-label="Email"
                icon={MdEmail}
                variant="ghost"
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="mailto:zequnyu11@gmail.com"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "100%", md: "50%" }}
          justify={{ base: "center", md: "flex-start" }}
        >
          <Image
            src={colorMode === "light" ? "/main.png" : "/main_dark.png"}
            alt="My avatar"
            size={{ base: "240px", md: "300px" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
