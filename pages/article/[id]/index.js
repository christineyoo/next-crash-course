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

//You can either use the useRouter hook to grab the article's id or you can use this getServerSideProps function

//getServerSideProps - fetches data at the time of request rather than at getStaticProps (which fetches at build time)

//getStaticPaths can dynamically generate all the paths with all the data
//You would need to use getStaticPaths and getStaticProps TOGETHER

//context - allows us to get the id of whatever is in the url
//This function could be getServerSideProps instead of getStaticProps
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

//This generates all the paths for us for ALL the articles, even though our limit was 6
export const getStaticPaths = async () => {
    //These next two lines get us all of the posts (articles)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}})) //[{params: {id: '1'}}, {params: { id: '2'}}, ...]
    return {
        paths,
        fallback: false //returns 404 page if user navigates to something that doesn't exist
    }
}

export default article