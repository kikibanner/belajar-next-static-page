import {data} from '../data'
import { server } from '../config'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {
  const dev = process.env.NODE_ENV !== 'production'
  return (
    <div>
      <ArticleList articles={dev ? articles : data} />
    </div>
  )
}

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== 'production'
  if (dev) {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()

    return {
      props: {
        articles
      }
    }
  }  else {
      return {
        props: {
          data
        }
      }
  }

  
}
 
/* export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
} */
