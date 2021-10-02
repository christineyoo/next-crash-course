// import Head from 'next/head' //Used if you want custom titles or meta tags, keys or descriptions
import ArticleList from '../components/ArticleList'
import {server} from '../config/index'

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

// /////////////// This is how to do it with a database ///////////////
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// /////////////// This is how to do it with a 3rd party API ///////////////
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }