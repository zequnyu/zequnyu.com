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
import { FiFileText } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import LineText from "./LineText";

const Landing = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height={{ base: "480px", md: "360px" }}
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Flex
        maxWidth="1000px"
        margin="0 auto"
        paddingTop="30px"
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
            textAlign="center"
          >
            <LineText
              fontSize="4xl"
              fontWeight="bold"
              color={colorMode === "light" ? "gray.800" : "white"}
              heading
            >
              Zequn Yu
            </LineText>
            <Text color={colorMode === "light" ? "gray.500" : "gray.400"}>
              MSc Computer Science @ USC
            </Text>
            <Flex marginTop="5px" marginLeft={{ md: "-5px" }} justify="center">
              <IconButton
                aria-label="Resume"
                icon={FiFileText}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="/ZequnYu.pdf"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={FaLinkedin}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://www.linkedin.com/in/zequnyu/"
              />
              <IconButton
                aria-label="Github"
                icon={FaGithub}
                variant={colorMode === "light" ? "solid" : "ghost"}
                _focus={{ outline: 0 }}
                fontSize="24px"
                as="a"
                target="_blank"
                href="https://github.com/zequnyu"
              />
              <IconButton
                aria-label="Email"
                icon={MdEmail}
                variant={colorMode === "light" ? "solid" : "ghost"}
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
            src={colorMode === "light" ? "/main_less.png" : "/main_dark.png"}
            alt=""
            size={{ base: "240px", md: "300px" }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Landing;
