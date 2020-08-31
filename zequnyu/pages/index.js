import React from "react";
import Head from "next/head";
import Landing from "../components/Landing";
import AboutMe from "../components/About";
import Projects from "../components/Project/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zequn Yu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
