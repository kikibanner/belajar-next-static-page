import {data} from '../../../data'
import Meta from "../../../components/Meta"
import { server } from "../../../config"
import Link from "next/link"
import { useRouter } from "next/router"

const article = ({article}) => {
    /* const router = useRouter()
    const {id} = router.query */

    return (
        <>
            <Meta title={article.title} description={article.description}/>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href='/'>Back</Link>
        </>
    )
}

// UNTUK STATIC PAGE
export const getStaticProps = async (context) => {
    const dev = process.env.NODE_ENV !== 'production'

    if (dev) {
        const res = await fetch(`${server}/api/articles/${context.params.id}`)
    
        const article = await res.json()
    
        return {
            props: {
                article
            }
        }
    }  else {
        const filtered = data.filter(article => article.id === context.params.id)
        return {
            props: {
                filtered
            }
        }
    }
}

export const getStaticPaths = async () => {
    const dev = process.env.NODE_ENV !== 'production'

    if (dev) {
        const res = await fetch(`${server}/api/articles`)

        const articles = await res.json()
    
        const ids = articles.map(article => article.id)
        const paths = ids.map(id => ({
            params: {
                id: id.toString()
            }
        }))
    
        return {
            paths,
            fallback: false
        }
    }  else {
        const ids = data.map(article => article.id)
        const paths = ids.map(id => ({
            params: {
                id: id.toString()
            }
        }))
    
        return {
            paths,
            fallback: false
        }
    }

    
}


// export const getServerSideProps = async (context) => {
/* export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({
        params: {
            id: id.toString()
        }
    }))

    return {
        paths,
        fallback: false
    }
} */

export default article