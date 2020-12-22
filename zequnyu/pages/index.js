import React, { useEffect } from "react";
import Head from "next/head";
import { Box, useColorMode } from "@chakra-ui/react";
import ColorSwitcher from "../components/Header/ColorSwitcher";
import Landing from "../components/Landing";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Project/Projects";
import Footer from "../components/Footer";

export default function Home() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line no-undef, prefer-rest-params
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-4MQPHK82BD");
  }, []);

  return (
    <Box backgroundColor={colorMode === "light" ? "white" : "gray.700"}>
      <Head>
        <title>Zequn Yu</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4MQPHK82BD"
        />
      </Head>
      <ColorSwitcher />
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </Box>
  );
}
