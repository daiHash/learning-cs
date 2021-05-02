import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>Learning CS Concepts</title>
          <meta
            name='description'
            content='Some references to learn and understand Computer Science concepts'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
