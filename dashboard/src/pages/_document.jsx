import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <title>My page title</title>
      </Head>
      <body className='height-full'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
 