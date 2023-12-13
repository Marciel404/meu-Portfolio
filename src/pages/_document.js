import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function () {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <meta charSet="UTF-8"/>
        <link rel="icon" href="/images/eu.jpg" type="image/x-icon"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}