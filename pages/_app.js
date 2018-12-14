import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render () {
        const {Component, pageProps} = this.props;
        return <Container>
            <Head>
                <title>Zequn Yu</title>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossOrigin="anonymous"
                />
                <link href="https://fonts.googleapis.com/css?family=Francois+One|Open+Sans" rel="stylesheet" />
                <link rel="icon" href="/static/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </Container>
    }
}