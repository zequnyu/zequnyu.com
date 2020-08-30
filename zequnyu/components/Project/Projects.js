import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import LineText from "../LineText";

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      height={{ base: "480px", md: "360px" }}
      marginBottom="50px"
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Box
        maxWidth="600px"
        paddingTop="25px"
        margin="0 auto"
        style={{ fontFamily: "LeituraNews-Roman2", textAlign: "justify" }}
      >
        <LineText>Projects</LineText>
      </Box>
    </Box>
  );
};

export default Projects;
