import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags }
    }

    render () {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossOrigin="anonymous"
                />
                <link href="https://fonts.googleapis.com/css?family=Francois+One|Open+Sans" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                {this.props.styleTags}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}