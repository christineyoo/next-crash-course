import Document, { Html, Head, Main, NextScript } from 'next/document'
//We're bringing in the Document class

class MyDocument extends Document {

  render() {
    return (
        //You can pass attributes in as props to HTML if you need to add something to the body
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument