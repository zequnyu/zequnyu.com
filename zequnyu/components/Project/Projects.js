import React from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import LineText from "../LineText";
import TextLink, { IconTextLink } from "../TextLink";
import Project from "./Project";
import { PythonBadge, JavaBadge, MySQLBadge, JavaScriptBadge, ReactBadge } from "../Badges";

const garageProject = (
  <Project
    key="garage"
    title="garage"
    subTitle="USC RESL"
    badges={[PythonBadge]}
    description={
      <span>
        garage is an open source Python toolkit for developing and evaluating 
        reinforcement learning algorithms, and an accompanying library of 
        state-of-the-art implementations built using that toolkit. garage 
        supports both&nbsp;
        <TextLink href="https://www.tensorflow.org">TensorFlow</TextLink>
        &nbsp;and&nbsp;
        <TextLink href="https://pytorch.org">PyTorch</TextLink>
        .
      </span>
    }
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/rlworkgroup/garage"
      />,
    ]}
  />
);

const travelDashboardProject = (
  <Project
    key="Travel Dashboard"
    title="Travel Dashboard"
    subTitle="ATOS UK"
    badges={[JavaBadge, MySQLBadge]}
    description={
      <span>
        We built a&nbsp;
        <TextLink href="https://docs.oracle.com/javase/8/javafx/get-started-tutorial/jfx-overview.htm">
          JavaFx
        </TextLink>
        &nbsp;desktop software, which takes the raw data of different Excel file
        schemas available from Atos, perform analytics, and produce a summary
        report to present the information in a consumable format.
      </span>
    }
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

const urankProject = (
  <Project
    key="uRank"
    title="uRank"
    badges={[PythonBadge, JavaScriptBadge, ReactBadge]}
    description={
      <span>
        uRank is a project to collect, process and visualize data from&nbsp;
        <TextLink href="https://www.topuniversities.com">
          QS
        </TextLink>
        ,&nbsp;
        <TextLink href="https://www.usnews.com/education/best-global-universities">
          US News
        </TextLink>
        ,&nbsp;
        <TextLink href="https://www.timeshighereducation.com/">
          Times
        </TextLink>
        &nbsp;and&nbsp;
        <TextLink href="http://www.shanghairanking.com/">
          ARWU
        </TextLink>
        &nbsp;world university rankings in 2015-2019. Data is collected by the Python web crawling 
        framework&nbsp;
        <TextLink href="https://scrapy.org/">
          Scrapy
        </TextLink>
        &nbsp;and website is built by&nbsp;
        <TextLink href="https://reactjs.org/">
          React
        </TextLink>
        ,&nbsp;
        <TextLink href="https://www.chartjs.org/">
          Chart.js
        </TextLink>
        &nbsp;and&nbsp;
        <TextLink href="https://bulma.io/">
          Bulma
        </TextLink>
        .
      </span>
    }
    links={[
      <IconTextLink
        key="CODE"
        iconType="CODE"
        href="https://github.com/zequnyu/uRank"
      />,
      <IconTextLink
        key="WEBSITE"
        iconType="WEBSITE"
        href="https://urank.netlify.app"
      />,
    ]}
  />
);


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
        {travelDashboardProject}
        {urankProject}
      </Box>
    </Box>
  );
};

export default Projects;
