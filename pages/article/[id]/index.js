//This is a single article page
import { useRouter } from 'next/router'

const article = () => {
    const router = useRouter() //Contains any parameters in the route. So we can destructure them
    const { id } = router.query

    return (
        <div>
            This is article {id}
        </div>
    )
}

export default article