import React from 'react';
import App, { Container } from 'next/app';
import Head from "next/head";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Zequn Yu</title>
                </Head>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </Container>
        );
    }
}

export default MyApp;
