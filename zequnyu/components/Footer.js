import React from "react";
import { Flex, Box, Text, Divider, useColorMode } from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height="20vh"
      backgroundColor={colorMode === "light" ? "white" : "gray.700"}
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
            2020&nbsp;&nbsp;
            <span role="img" aria-label="">
              👨‍💻
            </span>
            &nbsp;&nbsp;Zequn Yu
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
