//This is a single article page
// import { useRouter } from 'next/router'
import Link from 'next/link'

const article = ({article}) => {
    // const router = useRouter() //Contains any parameters in the route. So we can destructure them
    // const { id } = router.query

    return (
        <>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}

//getServerSideProps - fetches data at the time of request rather than at staticProps, which fetches at build time
//getStaticPaths can dynamically generate all the paths with all the data

//context - allows us to get the id of whatever is in the url
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}
export default article