import Document, { Html, Head, Main, NextScript } from 'next/document'
import GlobalStyle from '../components/GlobalStyle'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>React Chat App</title>
          <link rel="shortcut icon" href="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80" type="image/x-icon"></link>
          <link rel="icon" href="https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=30&h=30&q=80" type="image/x-icon"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle/>
        </body>
      </Html>
    )
  }
}

export default MyDocument