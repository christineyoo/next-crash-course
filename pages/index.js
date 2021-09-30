import Head from 'next/head' //Used if you want custom titles or meta tags, keys or descriptions
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
//Rule: can't import global stylesheets directly into components
// You can call `styles` whatever you like. Just make sure to use correct file path on import statement

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head>
     <h1>Welcome to Next</h1>
    </div>
  )
}
