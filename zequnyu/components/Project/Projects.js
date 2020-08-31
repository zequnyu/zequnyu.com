import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import LineText from "../LineText";
import garageProject from "./garage";
import uRankProject from "./uRank";
import travelDashboardProject from "./travelDashboard";
import diamondHunterProject from "./diamondHunter";
import zequnyucomProject from "./zequnyucom";
import ugThesisProject from "./ugThesis";

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="100%"
      paddingTop="25px"
      paddingBottom="25px"
      backgroundColor={colorMode === "light" ? "gray.100" : "gray.800"}
    >
      <Box
        maxWidth="750px"
        paddingTop="25px"
        margin="0 auto"
        style={{ fontFamily: "LeituraNews-Roman2", textAlign: "justify" }}
      >
        <LineText>Projects</LineText>
        {garageProject}
        {zequnyucomProject}
        {uRankProject}
        {ugThesisProject}
        {travelDashboardProject}
        {diamondHunterProject}
      </Box>
    </Box>
  );
};

export default Projects;
