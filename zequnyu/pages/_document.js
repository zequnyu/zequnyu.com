import Document, { Html, Head, Main, NextScript } from 'next/document';

import 'bulma/css/bulma.min.css'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Francois+One|Open+Sans&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="has-navbar-fixed-top">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
