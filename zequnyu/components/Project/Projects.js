import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import LineText from "../LineText";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PythonBadge, JavaBadge, MySQLBadge } from "../Badges";

const Projects = () => {
  const { colorMode } = useColorMode();

  const garageDescription = (
    <span>
      garage is an open source&nbsp;
      <TextLink href="https://www.python.org">Python</TextLink>
      &nbsp;toolkit for developing and evaluating reinforcement learning
      algorithms, and an accompanying library of state-of-the-art
      implementations built using that toolkit.
    </span>
  );
  const garageProject = (
    <Project
      key="garage"
      title="garage"
      subTitle="USC RESL"
      badges={[PythonBadge]}
      description={garageDescription}
      links={[
        <IconTextLink
          key="CODE"
          iconType="CODE"
          href="https://github.com/rlworkgroup/garage"
        />,
      ]}
    />
  );

  const travelDashboardDescription = (
    <span>
      We built a&nbsp;
      <TextLink href="https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm">
        JavaFx
      </TextLink>
      &nbsp;desktop software, which takes the raw data of different Excel file
      schemas available from Atos, perform analytics, and produce a summary
      report to present the information in a consumable format.
    </span>
  );
  const travelDashboard = (
    <Project
      key="Travel Dashboard"
      title="Travel Dashboard"
      subTitle="ATOS UK"
      badges={[JavaBadge, MySQLBadge]}
      description={travelDashboardDescription}
      links={[
        <IconTextLink
          key="CODE"
          iconType="CODE"
          href="https://github.com/zequnyu/TravelDashboard"
        />,
        <IconTextLink
          key="DEMO"
          iconType="DEMO"
          href="https://prezi.com/7dcthzh6e37w/?token=35036f4ce470539a401af89c830b292a6be700099d3887a298e5abdc9314d991"
        />,
      ]}
    />
  );

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
        {travelDashboard}
      </Box>
    </Box>
  );
};

export default Projects;
