import React, { useEffect } from "react";
import Head from "next/head";
import Landing from "../components/Landing";
import AboutMe from "../components/About";
import Projects from "../components/Project/Projects";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments) }
    gtag('js', new Date());

    gtag('config', 'G-4MQPHK82BD');
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Zequn Yu</title>
        <link rel="icon" href="/favicon.ico" /> 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4MQPHK82BD"></script>
      </Head>
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
