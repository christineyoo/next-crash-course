// import Head from 'next/head' //Used if you want custom titles or meta tags, keys or descriptions
import ArticleList from '../components/ArticleList'
import {server} from '../config/index'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
//Rule: can't import global stylesheets directly into components
// You can call `styles` whatever you like. Just make sure to use correct file path on import statement

export default function Home({articles}) {
  return (
    <div>
      {/* <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming' />
      </Head> */}
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}


// Three methods to fetch data:
  // getStaticProps - allows us to fetch data at build time
  // getServerSideProps - allows us to fetch the data on every request (slower)
  // getStaticPaths - allows us to dynamically generate paths based on the data we're fetching

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }
