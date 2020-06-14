import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zequn Yu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}
