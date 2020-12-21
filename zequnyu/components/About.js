/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import LineText from "./LineText";
import TextLink from "./TextLink";

const AboutMe = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      width="100%"
      marginBottom={{ base: "25px", md: "50px" }}
      backgroundColor={colorMode === "light" ? "white" : "gray.800"}
    >
      <Box
        maxWidth="750px"
        paddingTop="25px"
        margin="0 auto"
        style={{ fontFamily: "LeituraNews-Roman2" }}
        textAlign={{ base: "start", md: "justify" }}
      >
        <LineText>About</LineText>
        <p style={{ margin: "25px" }}>
          I am a master student at the&nbsp;
          <TextLink href="https://www.usc.edu/">
            University of Southern California
          </TextLink>
          . In the meantime, I am also a student worker at USC&nbsp;
          <TextLink href="https://robotics.usc.edu/resl/">
            Robotic Embedded Systems Lab
          </TextLink>
          , where I primarily work on an open source project&nbsp;
          <TextLink href="https://github.com/rlworkgroup/garage">
            garage
          </TextLink>
          .
        </p>
        <p style={{ margin: "25px" }}>
          Prior to joining USC, I received my Bachelor of Science from the&nbsp;
          <TextLink href="https://www.nottingham.ac.uk/">
            University of Notthingham
          </TextLink>
          &nbsp;with First Class Honours. At Nottingham, I worked on Travel
          Dashboard project for&nbsp;
          <TextLink href="https://atos.net/en-gb/united-kingdom">
            Atos UK
          </TextLink>
          , supervised by Professor&nbsp;
          <TextLink href="https://www.nottingham.ac.uk/computerscience/people/natasa.milic-frayling">
            Natasa Milic-Frayling
          </TextLink>
          . I was also affiliated with UoN&nbsp;
          <TextLink href="https://www.nottingham.ac.uk/research/groups/mixedrealitylab/">
            Mixed Reality Lab
          </TextLink>
          &nbsp;under Dr.&nbsp;
          <TextLink href="https://www.nottingham.ac.uk/computerscience/people/max.wilson">
            Max L. Wilson
          </TextLink>
          .
        </p>
        <p style={{ margin: "25px" }}>
          I completed software engineer internships at&nbsp;
          <TextLink href="https://www.citrix.com/">Citrix Systems</TextLink>
          &nbsp;(2020),&nbsp;
          <TextLink href="https://worthnote.netlify.app/">WorthNote</TextLink>
          &nbsp;(2018),&nbsp;
          <TextLink href="http://english.cas.cn/">
            Chinese Academy of Sciences
          </TextLink>
          &nbsp;(2017) and&nbsp;
          <TextLink href="https://www.gtcom.com.cn/en/">GTCOM</TextLink> (2016).
          I enjoy programming in Python, JavaScript and&nbsp;
          <TextLink href="https://www.haskell.org/">Haskell</TextLink>.
        </p>
      </Box>
    </Box>
  );
};

export default AboutMe;
