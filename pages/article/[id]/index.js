//This is a single article page
// import { useRouter } from 'next/router'
import Link from 'next/link'
import {server} from '../../../config/index'
import Meta from '../../../components/Meta'


const article = ({article}) => {
    // const router = useRouter() //Contains any parameters in the route. So we can destructure them
    // const { id } = router.query

    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

// /////////////// This is how to do it with a database ///////////////
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

//This generates all the paths for us for ALL the articles, even though our limit was 6
export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}})) //[{params: {id: '1'}}, {params: { id: '2'}}, ...]
    return {
        paths,
        fallback: false //returns 404 page if user navigates to something that doesn't exist
    }
}

// /////////////// This is how to do it with a 3rd party API ///////////////
////////////////////////////////////////////////////////////////////////////

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// //This generates all the paths for us for ALL the articles, even though our limit was 6
// export const getStaticPaths = async () => {
//     //These next two lines get us all of the posts (articles)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params: {id: id.toString()}})) //[{params: {id: '1'}}, {params: { id: '2'}}, ...]
//     return {
//         paths,
//         fallback: false //returns 404 page if user navigates to something that doesn't exist
//     }
// }

export default article