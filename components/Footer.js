import React from "react";
import { Flex, Box, Text, Divider, useColorMode } from "@chakra-ui/core";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height="20vh"
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Flex
        width="80%"
        height="100%"
        margin="0 auto"
        direction="column"
        justify="center"
        align="center"
      >
        <Box>
          <Divider borderColor="gray.400" />
          <Text
            fontSize="sm"
            color={colorMode === "light" ? "gray.500" : "gray.400"}
          >
            © Copyright 2020 - Zequn Yu
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
